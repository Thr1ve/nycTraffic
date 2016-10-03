const r = require('rethinkdb');
const listen = require('socket.io');
const connect = require('./connect');
const { DB_NAME } = require('../config/db');

module.exports = function addSockets(server) {
  const io = listen(server);

  io.on('connection', function (socket) {

    console.log('Client connected via webSockets');

    connect().then(conn => {
      r.db(DB_NAME).table('updates').changes().run(conn)
        .then(cursor => {
          cursor.each((err, change) => {
            socket.emit('update', { change });
          });
        });
    });
  });
}
