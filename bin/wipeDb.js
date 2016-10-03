const r = require('rethinkdb');
const connect = require('../server/lib/connect');

const DATABASE = 'nycTraffic';

console.log(`Dropping database "${DATABASE}"...`);

connect().then(conn => {
  r.dbList().run(conn).then(list => {
    if (list.includes(DATABASE)) {
      return r.dbDrop(DATABASE).run(conn)
        .then(() => {
          console.log('Database dropped.');
          conn.close();
        });
    }
    console.log(`Database "${DATABASE}" not found.`);
    conn.close();
  })
});
