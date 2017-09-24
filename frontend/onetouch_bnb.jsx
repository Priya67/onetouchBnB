import React from 'react';
import ReactDOM from 'react-dom';
// import { login, logout, signup } from './util/session_api_util';
import { fetchSpots, fetchSpot } from './actions/spot_actions';
import configureStore from './store/store';
import Root from './components/root';

//REMOVE THESE LINES
// window.login = login;
// window.signup = signup;
// window.logout = logout;

//REMOVE THESE LINES

document.addEventListener("DOMContentLoaded", () => {
  // const store = configureStore();
  //
  // TESTING START
  // window.dispatch = store.dispatch;
  // TESTING END



  let store;
  if(window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  }
  else {
    store = configureStore();
  }

  window.dispatch = store.dispatch;
  window.getState = store.dispatch;
  window.fetchSpots = fetchSpots;
  window.fetchSpot = fetchSpot;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
