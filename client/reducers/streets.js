import { Map, List } from 'immutable';
import { SET_STREETS } from '../actions';

const defaultState = Map({
  paths: List([])
});

export default function streets(state = defaultState, action) {
  switch (action.type) {
    case SET_STREETS:
      return state.set('paths', List(action.streets))
    default:
      return state;
  }
}
