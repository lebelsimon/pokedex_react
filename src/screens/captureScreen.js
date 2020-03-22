import React, { useEffect, useState } from 'react';

import PokemonCapture from '../components/pokemon/PokemonCapture';
import spinner from '../components/pokemon/simple_pokeball.gif';
import background from '../captureBackground.png';
import styled from 'styled-components';
import alltheActions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



const CaptureScreen = props => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const idPokemon = Math.round(Math.random() * 151);
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
    <PokemonList>
      {loading ? (
        <img src={spinner} style={{ width: '5em', height: '5em' }}></img>
      ) : (
        <>
        {console.log(props.pokemonState.onepokemon)}
          <PokemonCapture
            pokemon={props.pokemonState.onepokemon}
          ></PokemonCapture>
        </>
      )}
    </PokemonList>
  );
};

const PokemonList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: red; */
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
  pokemonState: state.pokemon
});

export default connect(mapStateToProps, mapDispatchToProps)(CaptureScreen);
