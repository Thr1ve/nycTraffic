const r = require('rethinkdb');
const connect = require('../../../bin/connect');

module.exports = function(req, res) {
  connect()
    .then(conn => r.db('nycTraffic').table('streets')
      .map(v => ({ path: v('linkPoints') }))
      .run(conn)
    )
    .then(cursor => cursor.toArray().then(v => res.json(v)))
    .catch(err => res.end(err));
}
