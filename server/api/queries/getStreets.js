const r = require('rethinkdb');
const connect = require('../../lib/connect');

module.exports = function(req, res) {
  connect()
    .then(conn => r.db('nycTraffic').table('streets')
      .eqJoin('id', r.db('nycTraffic').table('updates'), { index: 'linkName' })
      .map(v => ({
        Borough: v('left')('Borough'),
        id: v('left')('id'),
        linkPoints: v('left')('linkPoints'),
        mostRecentUpdate: v('right').without('id').without('linkName')
      }))
      .run(conn)
    )
    .then(cursor => cursor.toArray().then(v => res.json(v)))
    .catch(err => res.end(err));
}
