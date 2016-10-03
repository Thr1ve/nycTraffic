import { Map, Record } from 'immutable';
import { SET_STREETS, UPDATE_STREET } from '../actions';
import { toSVGPath } from '../lib';

const defaultState = Map({});

const Update = Record({ Speed: '0', TravelTime: '0' });

// TODO: This should be two reducers
export default function streets(state = defaultState, action) {
  switch (action.type) {
    case SET_STREETS:
      return action.streets.reduce((prev, street) => {
        return prev.set(street.id, Map({
          svgCoords: toSVGPath(street.linkPoints),
          rawLatLong: street.linkPoints,
          name: street.id,
          borough: street.Borough,
          mostRecentUpdate: new Update()
        }));
      }, Map({}));
    case UPDATE_STREET:
      return state.setIn([action.key, 'mostRecentUpdate'], new Update(action.update));
    default:
      return state;
  }
}
