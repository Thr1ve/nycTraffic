const r = require('rethinkdb');
const { DB_NAME } = require('../config/db');

const connect = () =>
  r.connect({
    host: 'localhost',
    port: 28015,
    db: DB_NAME
});

module.exports = connect;
