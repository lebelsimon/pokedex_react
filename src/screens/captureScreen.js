import React, { useEffect, useState } from 'react';

import PokemonCapture from '../components/pokemon/PokemonCapture';
import spinner from '../components/pokemon/simple_pokeball.gif';
import background from '../captureBackground.png';
import styled from 'styled-components';
import alltheActions from '../actions';

import { compose } from 'redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import i18next from 'i18next';

import { withTranslation } from 'react-i18next';

import Loading from '../components/loading/loading';

const CaptureScreen = props => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    i18next.changeLanguage(props.languageState.language);
    const idPokemon = Math.round(Math.random() * 251);
    props.actions.pokemon.getPokemonById(idPokemon);
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
        <PokemonList>
          <PokemonCapture
            pokemon={props.pokemonState.onepokemon}
          ></PokemonCapture>
        </PokemonList>
      )}
    </>
  );
};

const PokemonList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${background});
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const mapDispatchToProps = () => dispatch => ({
  actions: {
    pokemon: bindActionCreators(alltheActions.pokemon, dispatch)
  }
});
const mapStateToProps = state => ({
  pokemonState: state.pokemon,
  languageState: state.language
});

export default compose(
  withTranslation(),
  connect(mapStateToProps, mapDispatchToProps)
)(CaptureScreen);
