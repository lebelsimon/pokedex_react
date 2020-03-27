import { combineReducers } from 'redux';

import userActions from './UserReducers';
import counter from './counter';
import crud from './crud';
import pokemon from './pokemonReducers';
import theme from './theme';
import language from './languageReducer';

export default combineReducers({
  counter,
  crud,
  userActions,
  pokemon,
  theme,
  language
});
