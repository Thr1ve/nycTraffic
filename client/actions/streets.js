import axios from 'axios';
import { toSVGPath } from '../lib';

export const SET_STREETS = 'SET_STREETS';
export const setStreets = streets => ({ type: SET_STREETS, streets });

export const getStreets = () => (dispatch, getState) => {
  axios.get('api/getStreets')
    .then(res => {
      console.log(res);
      const inStaten = res.data
        // .filter(street => street.Borough === 'Manhattan')
        .map(street => toSVGPath(street.linkPoints));
      dispatch(setStreets([
        ...inStaten
      ]))
    })
    .catch(err => console.log(err));
}
