import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import alltheActions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { compose } from 'redux';

import i18next from 'i18next';

import { withTranslation } from 'react-i18next';
import Loading from '../components/loading/loading';

const PokemonDetailScreen = props => {
  console.log(props);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
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
      setPokemon(props.pokemonState.onepokemon);
      setImageUrl(
        `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${props.pokemonState.onepokemon.id}.png?raw=true`
      );
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
          
          {console.log(props.pokemonState.onepokemon)}
          <DivBox>
            <DivBoxInner>
              <h1>{pokemon.name}</h1>
              <Sprite src={imageUrl}></Sprite>

              <h3>Pokemon n°{pokemon.id}</h3>
              <h3>Stats</h3>
              <ListStats>
                {pokemon.stats.map(stat => (
                  <OneStat>
                    <h3>{stat.stat.name} :</h3>
                    <p>{stat.base_stat}</p>
                  </OneStat>
                ))}
              </ListStats>
              <h3>Abilities</h3>
              <ListAbilities>
              {pokemon.abilities.map(ability => (
                  <OneStat>
                    <h3>{ability.ability.name}</h3>
                  </OneStat>
                ))}
              </ListAbilities>
            </DivBoxInner>
          </DivBox>
        </DivDetail>
      )}
    </>
  );
};

const OneStat = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const ListStats = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ListAbilities = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const Sprite = styled.img`
  @media (max-width: 768px) {
    width: 30em;
    height: 30em;
  }

  @media (max-width: 425px) {
    width: 5em;
    height: 5em;
  }
`;

const DivBox = styled.div`
  display: flex;
  /* justify-content: space-evenly; */
  width: 90%;

  background-color: rgba(0, 0, 0, 0.9);
  border: 2px solid #b78846;
  &:before,
  &:after {
    content: '•';
    position: absolute;
    width: 14px;
    height: 14px;
    font-size: 14px;
    color: #b78846;
    border: 2px solid #b78846;
    line-height: 12px;
    top: 5px;
    text-align: center;
  }
  @media (max-width: 768px) {
    &:before {
      left: 45px;
    }
    &:after {
      right: 45px;
    }
  }

  @media (max-width: 425px) {
    &:before {
      left: 22px;
    }
    &:after {
      right: 22px;
    }
  }
`;

const DivBoxInner = styled.div`
  color: white;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  &:before,
  &:after {
    content: '•';
    position: absolute;
    width: 14px;
    height: 14px;
    font-size: 14px;
    color: #b78846;
    border: 2px solid #b78846;
    line-height: 12px;
    bottom: 5px;
    text-align: center;
  }
  @media (max-width: 768px) {
    &:before {
      left: 45px;
    }
    &:after {
      right: 45px;
    }
  }

  @media (max-width: 425px) {
    &:before {
      left: 22px;
    }
    &:after {
      right: 22px;
    }
  }
  overflow: auto;
`;

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
