import { Map } from 'immutable';
import { TOGGLE_WATER, TOGGLE_STREETS } from '../actions';

const defaultState = Map({
  water: true,
  streets: true
});

export default function(state = defaultState, action) {
  switch(action.type) {
    case TOGGLE_WATER:
      return state.set('water', !state.get('water'));
    case TOGGLE_STREETS:
      return state.set('streets', !state.get('streets'));
    default:
      return state;
  }
}
