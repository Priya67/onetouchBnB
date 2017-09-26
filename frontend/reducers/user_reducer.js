import { RECEIVE_USER, RECEIVE_SPOT } from '../actions/spot_actions';

const UserReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_USER:
      return action.user;

    case RECEIVE_SPOT:
      return action.spot.user;

    default:
      return state;
  }
};

export default UserReducer;
