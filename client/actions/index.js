import axios from 'axios';

import waterOutline from '../waterOutline.js';
import { toSVGCoords } from '../lib'

const settings = {
  h: 0.43,
  w: 0.57,
  m: 350,
  hSkew: 50,
  vSkew: 20,
};

export * from './displayed';

export const SET_PATHS = 'SET_PATHS';
export const setPaths = paths => ({ type: SET_PATHS, paths });

export const getStreets = () => (dispatch, getState) => {
  axios.get('api/getStreets')
    .then(res => {
      const inStaten = res.data
        // .filter(street => street.Borough === 'Manhattan')
        .map(street => street.linkPoints
          .map(c => toSVGCoords(c, settings))
          .map(c => `${c.x},${c.y}`)
          .join(' ')
        );
      dispatch(setPaths([
        ...inStaten
      ]))
    })
    .catch(err => console.log(err));
}
