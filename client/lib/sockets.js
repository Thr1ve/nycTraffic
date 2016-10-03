import io from 'socket.io-client'
import { updateStreet } from '../actions';

export function addSockets(dispatch) {
  const socket = io('http://localhost:8000');

  socket.on('update', function (data) {
    const { change: { new_val } } = data;
    dispatch(updateStreet(new_val.linkName, new_val));
  });
}
