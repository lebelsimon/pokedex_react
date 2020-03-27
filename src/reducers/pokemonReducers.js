import {
  DISPATCH_POKEMON,
  DISPATCH_ONE_POKEMON
} from '../actions/pokemonActions';

const initialState = {
  pokemons: [],
  onepokemon: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPATCH_POKEMON:
      return {
        ...state,
        pokemons: action.payload
      };
    case DISPATCH_ONE_POKEMON:
      return {
        ...state,
        onepokemon: action.payload
      };
    default:
      return state;
  }
};
