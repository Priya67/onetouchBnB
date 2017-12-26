import * as BookingApiUtil from '../util/booking_api_util';
export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";

export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

export const createBooking = booking => dispatch => (
  BookingApiUtil.createBooking(booking).then(booking => (
    dispatch(receiveBookings(booking))
  ))
);

export const fetchBookings = id => dispatch => (
  BookingApiUtil.fetchBookings(id).then(bookings => (
    dispatch(receiveBookings(bookings))
  ))
);
