const moment = require('moment');
const r = require('rethinkdb');
const connect = require('./connect');
const getTrafficData = require('./getTrafficData');
const writeToLog = require('./writeToLog');

const insertItem = (item, conn) =>
    r.db('nycTraffic').table('data').insert(
    // TODO: create the id when we format the data in getTrafficData.js instead?
    Object.assign({}, item, {
      id: [item.linkName, new Date(item.DataAsOf)],
      DataAsOf: new Date(item.DataAsOf),
      linkPoints: formatLinkPoints(item.linkPoints)
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

// TODO: the last link pair is sometimes one of these invalid cases:
//    - second item is incomplete:
//        - [ "40.63086", "-" ]
//        - [ "40.7607405", "-7" ]
//        - [ "40.69944", "-73." ]
//    - only one item: [ "40.6178" ]
function formatLinkPoints(str) {
  return str
    .trim()
    .split(' ')
    .map(pair => pair.split(','))
}
