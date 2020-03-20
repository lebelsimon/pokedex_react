import { combineReducers } from 'redux';

import counter from './counter';
import crud from './crud';
import userActions from './userReducers';

export default combineReducers({
  counter,
  crud,
  userActions
});
