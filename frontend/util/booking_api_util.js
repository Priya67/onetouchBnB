export const fetchBookings = id => (
  $.ajax({
    method: 'GET',
    url: `api/bookings/${id}`,
  })
);

export const createBooking = booking => (
  $.ajax({
    method: 'POST',
    url: 'api/bookings',
    data: booking
  })
);
