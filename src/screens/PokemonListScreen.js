import React, { useEffect } from 'react';

import PokemonDetail from '../components/pokemon/PokemonDetail';
import styled from 'styled-components';
import alltheActions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const PokemonListScreen = props => {
  useEffect(() => {
    props.actions.pokemon.pokemonCall();
  }, []);
  return (
    <PokemonList>
      {props.pokemonState.pokemons.map(pokemon => (
        <PokemonDetail key={pokemon.name} pokemon={pokemon}></PokemonDetail>
      ))}
    </PokemonList>
  );
};

const PokemonList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  
  height: 100vh;
  background-image: url(${props => props.theme.backgroundimage});
  background-position: ${props => props.theme.backgroundposition};
  background-repeat: ${props => props.theme.backgroundrepeat};
  background-size: ${props => props.theme.backgroundsize};
`;

const mapDispatchToProps = () => dispatch => ({
  actions: {
    pokemon: bindActionCreators(alltheActions.pokemon, dispatch)
  }
});
const mapStateToProps = state => ({
  pokemonState: state.pokemon,
  
  themeState: state.theme
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonListScreen);
