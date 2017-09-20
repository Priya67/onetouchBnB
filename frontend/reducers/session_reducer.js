import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions.js';

const _nullUser = Object.freeze({
  currentUser: null
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      // return action.currentUser;
      const currentUser = action.currentUser;
      let newState = merge({}, { currentUser });
      return newState;
      // console.log(newState);
      // action ->
      // {type: ___
      // currentUser: {username: 'priya', password: 'password'}}
      //
      // session: {
      //   currentUser: null,
      //   currentUser: {username: 'priya', password: 'password'}
      // }
      //
      // session: {
      //   username: 'priya',
      //   password: 'password'
      // }

    default:
      return state;
  }
};

export default SessionReducer;
