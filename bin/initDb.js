const r = require('rethinkdb');
const connect = require('./connect');

const DATABASE = 'nycTraffic';
const TABLE_NAME = 'data';

const createDbIfNeeded = (dbName, conn) =>
  r.dbList().run(conn)
    .then(list => {
      if (!list.includes(dbName)) {
        console.log(`  Database "${dbName}" not found. Creating...`);
        return r.dbCreate(dbName).run(conn)
      }
      console.log(`  Database "${dbName}" already exists.`);
      return Promise.resolve();
    });

const createTableIfNeeded = (tableName, conn) =>
  r.db(DATABASE).tableList().run(conn)
    .then(list => {
      if (!list.includes(tableName)) {
        console.log(`  Table "${tableName}" not found. Creating...`);
        return r.db(DATABASE).tableCreate(tableName).run(conn)
      }
      console.log(`  Table "${tableName}" already exists.`);
      return Promise.resolve();
    });

console.log('Initializing Database...');

connect().then(conn =>
  createDbIfNeeded(DATABASE, conn)
    .then(() => createTableIfNeeded(TABLE_NAME, conn))
    .then(() => {
      console.log('Database Initialized.');
      conn.close();
    })
)
