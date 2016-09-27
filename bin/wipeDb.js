const r = require('rethinkdb');
const connect = require('./connect');

const DATABASE = 'nycTraffic';

console.log(`Dropping database "${DATABASE}"`);

connect()
  .then(conn => {
    r.dbDrop(DATABASE).run(conn)
      .then(() => {
        console.log('Database dropped.');
        conn.close();
      });
  });