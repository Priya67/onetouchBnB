import { RECEIVE_BOOKING } from '../actions/booking_actions';

import merge from 'lodash/merge';

const BookingsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_BOOKING:
      const booking = action.booking;
      let newState = merge({}, state);
      newState[booking.spot_id].bookings.push(booking);
      return newState;

      default:
        return state;

  }
};

export default BookingsReducer;
