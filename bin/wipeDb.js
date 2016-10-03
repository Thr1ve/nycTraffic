const r = require('rethinkdb');
const connect = require('../server/lib/connect');
const { DB_NAME } = require('../server/config/db');

console.log(`Dropping database "${DB_NAME}"...`);

connect().then(conn => {
  r.dbList().run(conn).then(list => {
    if (list.includes(DB_NAME)) {
      return r.dbDrop(DB_NAME).run(conn)
        .then(() => {
          console.log('Database dropped.');
          conn.close();
        });
    }
    console.log(`Database "${DB_NAME}" not found.`);
    conn.close();
  })
});
