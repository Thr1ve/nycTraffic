const r = require('rethinkdb');
const connect = require('./connect');
const getTrafficData = require('./getTrafficData');

const db = string => r.db(string);

const insertItem = (item, conn) =>
  db('nycTraffic').table('data').insert(
    // TODO: create the id when we format the data in getTrafficData.js instead?
    Object.assign({}, item, { id: [item.linkName, item.DataAsOf] })
  ).run(conn)

module.exports = function updateDb() {
  getTrafficData().then(data => {
    connect()
      .then(conn => Promise.all(data.map(item => insertItem(item, conn)))
        .then(res => console.log(`${res.filter(item => !item.errors).length} items added`))
        .then(() => conn.close())
      )
      .catch(err => console.log(err));
  });
}
