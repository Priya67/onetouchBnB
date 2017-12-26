import { RECEIVE_BOOKINGS } from '../actions/booking_actions';

import merge from 'lodash/merge';

const BookingsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_BOOKINGS:
      console.log("I am here", action);

      // const booking = action.booking.;
      // let newState = merge({}, state);
      // newState[booking.spot_id].bookings.push(booking);
      return merge({}, action.bookings);

      default:
        return state;

  }
};

export default BookingsReducer;
