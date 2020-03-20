import { DISPATCH_POKEMON } from '../actions/pokemonActions'

const initialState = {
  pokemons: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPATCH_POKEMON:
      return {
        ...state,
        pokemons: action.payload
      }
    default:
      return state
  }
}
