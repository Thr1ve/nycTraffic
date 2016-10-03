const r = require('rethinkdb');
const connect = require('../../lib/connect');

module.exports = function(req, res) {
  connect()
    .then(conn => r.db('nycTraffic').table('updates')
      .group('linkName').max('DataAsOf')
      .ungroup()
      .map(group => r.db('nycTraffic').table('streets').get(group('group'))
        .merge({ mostRecentUpdate: group('reduction').without('linkName').without('id') })
      ).run(conn)
    )
    .then(cursor => cursor.toArray().then(v => res.json(v)))
    .catch(err => res.end(err));
}
