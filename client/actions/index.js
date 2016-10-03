import { getStreets } from './';

export const init = () => (dispatch, getState) => {
  dispatch(getStreets());
}

export * from './displayed';
export * from './streets';
