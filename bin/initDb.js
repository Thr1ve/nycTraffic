const r = require('rethinkdb');
const connect = require('../server/lib/connect');
const { DB_NAME, TABLES, SECONDARY_INDEXES } = require('../server/config/db');

const createDbIfNeeded = (dbName, conn) =>
  r.dbList().run(conn)
    .then(list => {
      if (!list.includes(dbName)) {
        console.log(`  Database "${dbName}" not found. Creating...`);
        return r.dbCreate(dbName).run(conn);
      }
      console.log(`  Database "${dbName}" already exists.`);
      return Promise.resolve();
    });

const createTableIfNeeded = (tableName, conn) =>
  r.db(DB_NAME).tableList().run(conn)
    .then(list => {
      if (!list.includes(tableName)) {
        console.log(`  Table "${tableName}" not found. Creating...`);
        return r.db(DB_NAME).tableCreate(tableName).run(conn);
      }
      console.log(`  Table "${tableName}" already exists.`);
      return Promise.resolve();
    });

const createSecondaryIndex = ({ tableName, index }, conn) => {
  console.log(`Creating secondary index "${index}"...`);
  return r.db(DB_NAME).table(tableName).indexCreate(index).run(conn)
    .then(() => r.db(DB_NAME).table(tableName).indexWait(index).run(conn))
    .then(() => {
      console.log(`Secondary index "${index}" created and ready.`);
      return Promise.resolve();
    })
}

console.log('Initializing Database...');

connect().then(conn =>
  createDbIfNeeded(DB_NAME, conn)
    .then(() => Promise.all(TABLES.map(name => createTableIfNeeded(name, conn))))
    .then(() => Promise.all(SECONDARY_INDEXES.map(indexObj => createSecondaryIndex(indexObj, conn))))
    .then(() => {
      console.log('Database Initialized.');
      conn.close();
    })
);
