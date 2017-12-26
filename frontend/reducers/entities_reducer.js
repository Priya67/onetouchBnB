import { combineReducers } from 'redux';

import spots from './spots_reducer';
import user from './user_reducer';
import bookings from './booking_reducer';

export default combineReducers({
  spots,
  user,
  bookings
});
