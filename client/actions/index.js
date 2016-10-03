import { getStreets } from './';
import { addSockets }  from '../lib';

export const init = () => (dispatch, getState) => {
  dispatch(getStreets())
    .then(() => {
      addSockets(dispatch);
    });
}

export * from './displayed';
export * from './streets';
