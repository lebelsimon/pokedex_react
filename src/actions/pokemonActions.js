import axios from 'axios'

export const DISPATCH_POKEMON = 'DISPATCH_POKEMON';

export const dispatchPokemons = payload => ({
    type: DISPATCH_POKEMON,
    payload
})

export const pokemonCall = () => dispatch => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
    .then(res => {
        console.log(res.data);
        dispatch(dispatchPokemons(res.data.results))
    })
    .catch(err => console.error(err))
} 