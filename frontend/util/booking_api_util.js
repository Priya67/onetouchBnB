export const receiveBookings = user_id => (
  $.ajax({
    method: 'GET',
    url: `api/bookings/${user_id}`,
    date: {spot_id}
  })
);

export const createBooking = booking => (
  $.ajax({
    method: 'POST',
    url: 'api/bookings',
    date: booking
  })
);
