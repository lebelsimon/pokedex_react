import axios from 'axios';

export const DISPATCH_POKEMON = 'DISPATCH_POKEMON';
export const DISPATCH_ONE_POKEMON = 'DISPATCH_ONE_POKEMON';

export const DISPATCH_POKEMON_DETAIL = 'DISPATCH_POKEMON_DETAIL';

export const dispatchPokemons = payload => ({
  type: DISPATCH_POKEMON,
  payload
});

export const dispatchOnePokemon = payload => ({
  type: DISPATCH_ONE_POKEMON,
  payload
});

export const pokemonCall = offset => dispatch => {
  axios
    .get('https://pokeapi.co/api/v2/pokemon/?offset='+offset+'&limit=20')
    .then(res => {
      console.log(res.data);
      dispatch(dispatchPokemons(res.data.results));
    })
    .catch(err => console.error(err));
};

export const getPokemonById = id => dispatch => {
  axios
    .get('https://pokeapi.co/api/v2/pokemon/' + id + '/')
    .then(res => {
        console.log("Trouvé");
      console.log(res);
      dispatch(dispatchOnePokemon(res.data));
    })
    .catch(err => console.error(err));
};
