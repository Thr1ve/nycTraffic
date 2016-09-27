const moment = require('moment');
const r = require('rethinkdb');
const connect = require('./connect');
const getTrafficData = require('./getTrafficData');
const writeToLog = require('./writeToLog');

const db = string => r.db(string);

const insertItem = (item, conn) =>
  db('nycTraffic').table('data').insert(
    // TODO: create the id when we format the data in getTrafficData.js instead?
    Object.assign({}, item, {
      id: [item.linkName, new Date(item.DataAsOf)], 
      DataAsOf: new Date(item.DataAsOf)
    })
  ).run(conn)

module.exports = function updateDb() {
  getTrafficData().then(data => {
    connect()
      .then(conn => Promise.all(data.map(item => insertItem(item, conn)))
        .then(res => {
          const nItems = res.filter(item => !item.errors).length;
          console.log(`${nItems} items added`);
          writeToLog(`${moment(Date.now())}  --  ${nItems} added`)
        })
        .then(() => conn.close())
      )
      .catch(err => console.log(err));
  });
}
