import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import entities from './entities_reducer';
import ui from './ui_reducer';
console.log("root_reducer_start",entities);
const RootReducer = combineReducers({
  session,
  errors,
  entities,
  ui
});
console.log("root_reducer_end",entities);
export default RootReducer;
