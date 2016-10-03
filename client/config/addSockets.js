import io from 'socket.io-client'

export default function addSockets(store) {
  const socket = io('http://localhost:8000');

  socket.on('update', function (data) {
    console.log(data);
  });
}
