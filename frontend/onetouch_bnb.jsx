import React from 'react';
import ReactDOM from 'react-dom';
// import { login, logout, signup } from './util/session_api_util';
import { fetchSpots, fetchSpot, fetchUser, createReview, fetchReviews } from './actions/spot_actions';
import configureStore from './store/store';
import { fetchBookings, createBooking } from './actions/booking_actions';
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
  // window.getState = store.dispatch;
  window.fetchSpots = fetchSpots;
  window.fetchSpot = fetchSpot;
  window.fetchUser = fetchUser;
  window.fetchBookings = fetchBookings;
  window.createBooking = createBooking;
  window.createReview = createReview;
  window.fetchReviews = fetchReviews;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
