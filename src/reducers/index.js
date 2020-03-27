import { combineReducers } from 'redux';

import counter from './counter';
import crud from './crud';
import userActions from './UserReducers';

export default combineReducers({
  counter,
  crud,
  userActions
});
