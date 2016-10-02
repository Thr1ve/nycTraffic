const r = require('rethinkdb');
const connect = require('../../lib/connect');

module.exports = function(req, res) {
  connect()
    .then(conn => r.db('nycTraffic').table('streets')
      .map(v => ({ path: v('linkPoints'), street: v('id') }))
      .run(conn)
    )
    .then(cursor => cursor.toArray().then(v => res.json(v)))
    .catch(err => res.end(err));
}
