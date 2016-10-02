const r = require('rethinkdb');
const sanitizeItem = require('./sanitizeItem');

const createStreet = ({ Borough, linkName, linkPoints }) => ({
  id: linkName,
  linkPoints,
  Borough
});

const createUpdate = ({ Speed, TravelTime, DataAsOf, linkName }) => ({
  id: [DataAsOf, linkName],
  DataAsOf,
  linkName,
  Speed,
  TravelTime
});

module.exports = function insertItem(itemData, conn) {
  const item = sanitizeItem(itemData);
  return Promise.all([
    r.db('nycTraffic').table('streets').insert(createStreet(item)).run(conn),
    r.db('nycTraffic').table('updates').insert(createUpdate(item)).run(conn)
  ]);
}
