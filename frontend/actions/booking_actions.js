import * as BookingApiUtil from '../util/booking_api_util';
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";

export const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});

export const createBooking = booking => dispatch => (
  BookingApiUtil.createBooking(booking).then(booking => (
    dispatch(receiveBooking(booking))
  ))
);
