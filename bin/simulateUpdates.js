const r = require('rethinkdb');
const connect = require('../server/lib/connect');

connect().then(conn => {
  r.db('nycTraffic').table('streets').forEach(street =>
    r.db('nycTraffic').table('updates').insert({
      id: [r.now(), street('id')],
      DataAsOf: r.now(),
      linkName: street('id'),
      TravelTime: r.random(10, 1000),
      Speed: r.random(1, 100)
    })
  ).run(conn).then(() => conn.close());
});
