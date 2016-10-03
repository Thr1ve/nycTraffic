import axios from 'axios';

export const SET_STREETS = 'SET_STREETS';
export const setStreets = streets => ({ type: SET_STREETS, streets });

export const UPDATE_STREET = 'UPDATE_STREET';
export const updateStreet = (key, update) => ({ type: UPDATE_STREET, key, update });

export const getStreets = () => (dispatch, getState) =>
  axios.get('api/getStreets')
    .then(res => {
      dispatch(setStreets(res.data));
      return Promise.resolve();
    })
    .catch(err => console.log(err));
