import { combineReducers } from 'redux';

import counter from './counter';
import crud from './crud';
import register from './registerReducers';

export default combineReducers({
  counter,
  crud,
  register
});
