import { combineReducers } from 'redux'

import counter from './counter'
import crud from './crud'
import pokemon from './pokemonReducers'

export default combineReducers({
  counter,
  crud,
  pokemon
})
