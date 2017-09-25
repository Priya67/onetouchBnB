import { RECEIVE_SPOTS, RECEIVE_SPOT } from '../actions/spot_actions';
import merge from 'lodash/merge';

const SpotsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newSpot = {};

  switch(action.type) {
    case RECEIVE_SPOTS:
      return merge({}, state, action.spots);

    case RECEIVE_SPOT:
      newSpot = merge({}, state, {[action.spot.id]: action.spot});
      return newSpot;

    default:
      return state;
  }
};

export default SpotsReducer;
