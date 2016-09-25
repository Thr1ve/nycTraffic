/* This also provides a convenient space for
  dealing with env variables later */
const r = require('rethinkdb');

const connect = () =>
  r.connect({
    host: 'localhost',
    port: 28015,
    db: 'nycTraffic'
});

module.exports = connect;
