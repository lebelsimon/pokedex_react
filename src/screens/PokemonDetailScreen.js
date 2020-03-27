import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import alltheActions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { compose } from 'redux';

import i18next from 'i18next';

import { withTranslation } from 'react-i18next';
import Loading from '../components/loading/loading';

import PokemonDetail from '../components/pokemon/PokemonDetail'

const PokemonDetailScreen = props => {
  console.log(props);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    i18next.changeLanguage(props.languageState.language);
    props.actions.pokemon.getPokemonById(props.match.params.pokemonIndex);
    const handler = setTimeout(() => {
      getPokemonToCapture();
    }, 1000);
    return () => {
      clearTimeout(handler);
    };
  }, []);

  const getPokemonToCapture = async () => {
    try {
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        
        <DivDetail>
          <PokemonDetail pokemon={props.pokemonState.onepokemon}></PokemonDetail>
          
        </DivDetail>
      )}
    </>
  );
};



const DivDetail = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  background-image: url(${props => props.theme.backgroundimage});
  background-position: ${props => props.theme.backgroundposition};
  background-repeat: ${props => props.theme.backgroundrepeat};
  background-size: ${props => props.theme.backgroundsize};
  overflow: auto;
`;

const mapDispatchToProps = () => dispatch => ({
  actions: {
    pokemon: bindActionCreators(alltheActions.pokemon, dispatch)
  }
});
const mapStateToProps = state => ({
  pokemonState: state.pokemon,

  languageState: state.language,
  themeState: state.theme
});

export default compose(
  withTranslation(),
  connect(mapStateToProps, mapDispatchToProps)
)(PokemonDetailScreen);
