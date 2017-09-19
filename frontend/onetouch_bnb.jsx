import React from 'react';
import ReactDOM from 'react-dom';
// import configureStore from './store/store';

document.addEeventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  // const store = configureStore();
  ReactDOM.render(<h1>Welcome to OneTouchBnB</h1>, root);
});
