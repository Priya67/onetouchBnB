import * as SpotApiUtil from '../util/spot_api_util';

export const RECEIVE_SPOTS = "RECEIVE_SPOTS";
export const RECEIVE_SPOT = "RECEIVE_SPOT";
export const RECEIVE_USER = "RECEIVE_USER";

export const receiveSpots = spots => ({
  type: RECEIVE_SPOTS,
  spots
});

export const receiveSpot = spot => ({
  type: RECEIVE_SPOT,
  spot
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const fetchSpots = () => dispatch => {
  return SpotApiUtil.fetchSpots().then(spots => (
    dispatch(receiveSpots(spots))
  ));
};

export const fetchSpot = id => dispatch => (
  SpotApiUtil.fetchSpot(id).then(spot => (
    dispatch(receiveSpot(spot))
  ))
);

export const fetchUser = id => dispatch => (
  SpotApiUtil.fetchUser(id).then(user => (
    dispatch(receiveUser(user))
  ))
);
