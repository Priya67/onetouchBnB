import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

// REGULAR ACTION CREATOR TO RECEIVE CURRENT USER
export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

// REGULAR ACTION CREATOR TO RECEIVE ERRORS
export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

// REGULAR ACTION CREATOR TO RECEIVE ERRORS
export const clearErrors = () => ({
  type: CLEAR_ERRORS
});


// THUNKS
export const signup = user => dispatch => (
  SessionApiUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveSessionErrors(err.responseJSON))
  ))
);
window.signup = signup;

export const login = user => dispatch => (
  SessionApiUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveSessionErrors(err.responseJSON))
  ))
);
window.login = login;

export const logout = () => dispatch => (
  SessionApiUtil.logout().then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);
window.logout = logout;
