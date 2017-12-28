import * as BookingApiUtil from '../util/booking_api_util';
export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const CREATE_NEW_BOOKING = "CREATE_NEW_BOOKING";
export const CLEAR_BOOKINGS = 'CLEAR_BOOKINGS';

export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

export const createNewBooking = booking => ({
  type: CREATE_NEW_BOOKING,
  booking
});

export const clearBookings = () => ({
  type: CLEAR_BOOKINGS
});

export const createBooking = booking => dispatch => (
  BookingApiUtil.createBooking(booking).then(booking => (
    dispatch(createNewBooking(booking))
  ))
);

export const fetchBookings = id => dispatch => (
  BookingApiUtil.fetchBookings(id).then(bookings => (
    dispatch(receiveBookings(bookings))
  ))
);
