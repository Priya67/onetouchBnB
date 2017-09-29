export const requestBookings = spot_id => (
  $.ajax({
    method: 'GET',
    url: 'api/bookings',
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
