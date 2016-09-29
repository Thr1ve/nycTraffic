const r = require('rethinkdb');

// TODO: the last link pair is sometimes one of these invalid cases:
//    - second item is incomplete:
//        - [ "40.63086", "-" ]
//        - [ "40.7607405", "-7" ]
//        - [ "40.69944", "-73." ]
//    - only one item: [ "40.6178" ]
const formatLinkPoints = str => str.trim().split(' ').map(pair => pair.split(','))

const createStreet = item => ({
  id: item.linkName.toUpperCase(),
  linkPoints: formatLinkPoints(item.linkPoints)
});

const createUpdate = ({ Speed, TravelTime, DataAsOf, linkName }) => ({
  id: [new Date(DataAsOf), linkName.toUpperCase()],
  DataAsOf: new Date(DataAsOf),
  linkName: linkName.toUpperCase(),
  Speed,
  TravelTime
});

module.exports = function insertItem(item, conn) {
  return Promise.all([
    r.db('nycTraffic').table('streets').insert(createStreet(item)).run(conn),
    r.db('nycTraffic').table('updates').insert(createUpdate(item)).run(conn)
  ]);
}
