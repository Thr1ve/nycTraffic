import axios from 'axios';

export const getPaths = () => (dispatch, getState) => {
  axios.get('api/asCoordinates')
    .then(res => console.log(res))
    .catch(err => console.log(err));
}
