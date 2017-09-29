import { RECEIVE_SPOTS, RECEIVE_SPOT, RECEIVE_REVIEW } from '../actions/spot_actions';
import { RECEIVE_BOOKING } from '../actions/booking_actions';

import merge from 'lodash/merge';
const SpotsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newSpot = {};
  let receiveSpots = {};
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_SPOTS:
      receiveSpots = merge({}, action.spots);
      return receiveSpots;


    case RECEIVE_SPOT:
      newSpot = merge({}, state, {[action.spot.id]: action.spot});
      return newSpot;

    case RECEIVE_REVIEW:
      const review = action.review;
      newState[review.spot_id].reviews.push(review);
      return newState;

      case RECEIVE_BOOKING:
        const booking = action.booking;
        newState[booking.spot_id].bookings.push(booking);
        return newState;

    default:
      return state;
  }
};
export default SpotsReducer;
