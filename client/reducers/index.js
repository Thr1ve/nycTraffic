import { combineReducers } from 'redux';

import displayed from './displayed';
import { SET_PATHS } from '../actions';

const defaultState = {
  paths: []
};

function paths(state = defaultState, action) {
  switch (action.type) {
    case SET_PATHS:
      return {
        ...state,
        paths: action.paths
      };
    default:
      return state;
  }
}

export default combineReducers({ paths, displayed })
