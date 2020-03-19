import { combineReducers } from 'redux'

import counter from './counter'
import crud from './crud'

export default combineReducers({
  counter,
  crud
})
