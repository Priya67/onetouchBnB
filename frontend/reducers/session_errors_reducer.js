import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const SessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = merge([], state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return merge(newState, action.errors);

    case RECEIVE_CURRENT_USER:
      return [];

    case CLEAR_ERRORS:
      return [];

    default:
      return state;
  }
};

export default SessionErrorsReducer;
