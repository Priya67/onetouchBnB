import { combineReducers } from 'redux';

import spots from './spots_reducer';
import user from './user_reducer';
console.log("entities_reducer_start",spots);
export default combineReducers({
  spots,
  user
});
