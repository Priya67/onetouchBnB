export const fetchSpots = bounds => (
  $.ajax({
    method: 'GET',
    url: 'api/spots',
    data: {bounds}
  })
);

export const fetchSpot = id => (
  $.ajax({
      method: 'GET',
      url: `api/spots/${id}`
  })
);


export const fetchUser = id => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  })
);

export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: review
  })
);

export const fetchReviews = spot_id => (
  $.ajax({
    method: 'GET',
    url: 'api/reviews',
    data: {spot_id}
  })
);
