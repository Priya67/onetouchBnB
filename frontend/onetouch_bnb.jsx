import React from 'react';
import ReactDOM from 'react-dom';
// import { login, logout, signup } from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';

//REMOVE THESE LINES
// window.login = login;
// window.signup = signup;
// window.logout = logout;

//REMOVE THESE LINES

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING END

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store}/>, root);
});
