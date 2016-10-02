import { TOGGLE_WATER, TOGGLE_STREETS } from '../actions';

const defaultState = {
  water: true,
  streets: true
};

export default function(state = defaultState, action) {
  switch(action.type) {
    case TOGGLE_WATER:
      return {
        ...state,
        water: !state.water
      };
    case TOGGLE_STREETS:
      return {
        ...state,
        streets: !state.streets
      };
    default:
      return state;
  }
}
