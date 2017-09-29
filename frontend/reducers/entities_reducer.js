import { combineReducers } from 'redux';

import spots from './spots_reducer';
import user from './user_reducer';
export default combineReducers({
  spots,
  user
});
