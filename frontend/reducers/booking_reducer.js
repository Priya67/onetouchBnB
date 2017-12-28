import { RECEIVE_BOOKINGS, CREATE_NEW_BOOKING, CLEAR_BOOKINGS } from '../actions/booking_actions';

import merge from 'lodash/merge';

const BookingsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_BOOKINGS:
      return merge({}, state, action.bookings);

    case CREATE_NEW_BOOKING:
      return merge({}, state, {[action.booking.id]: action.booking});

    case CLEAR_BOOKINGS:
      return [];

    default:
      return state;

  }
};

export default BookingsReducer;
