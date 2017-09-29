import { RECEIVE_SPOTS, RECEIVE_SPOT, RECEIVE_REVIEW } from '../actions/spot_actions';
import merge from 'lodash/merge';
console.log("spots_reducer_js_start");
const SpotsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newSpot = {};
  let receiveSpots = {};

  switch(action.type) {
    case RECEIVE_SPOTS:
      console.log("spot_reducer_RECEIVE_SPOTS");
      receiveSpots = merge({}, action.spots);
      console.log("spot_reducer_RECEIVE_SPOTS2: ",receiveSpots);
      return receiveSpots;


    case RECEIVE_SPOT:
      console.log("spot_reducer_RECEIVE_SPOT");
      newSpot = merge({}, state, {[action.spot.id]: action.spot});
      console.log("spot_reducer_RECEIVE_SPOT2: ",newSpot);
      return newSpot;

    case RECEIVE_REVIEW:
      console.log("spot_reducer_RECEIVE_REVIEW");
      const review = action.review;
      let newState = merge({}, state);
      console.log(newState);
      newState[review.spot_id].reviews.push(review);
      return newState;

    default:
      return state;
  }
};
console.log("spots_reducer_js_end");
export default SpotsReducer;
