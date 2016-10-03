const r = require('rethinkdb');
const connect = require('../../lib/connect');
const { DB_NAME } = require('../../config/db');

module.exports = function(req, res) {
  connect()
    .then(conn => r.db(DB_NAME).table('updates')
      .group('linkName').max('DataAsOf')
      .ungroup()
      .map(group => r.db(DB_NAME).table('streets').get(group('group'))
        .merge({ mostRecentUpdate: group('reduction').without('linkName').without('id') })
      ).run(conn)
    )
    .then(cursor => cursor.toArray().then(v => res.json(v)))
    .catch(err => res.end(err));
}
