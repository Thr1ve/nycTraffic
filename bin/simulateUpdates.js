const r = require('rethinkdb');
const connect = require('../server/lib/connect');
const { DB_NAME } = require('../server/config/db');

connect().then(conn => {
  r.db(DB_NAME).table('streets').forEach(street =>
    r.db(DB_NAME).table('updates').insert({
      id: [r.now(), street('id')],
      DataAsOf: r.now(),
      linkName: street('id'),
      TravelTime: r.random(10, 1000),
      Speed: r.random(1, 100)
    })
  ).run(conn).then(() => conn.close());
});
