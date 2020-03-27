import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import failCapture from '../../images/fail_capture.gif';
import goCapture from '../../images/go_capture.gif';
import pokemoNcaptured from '../..//images/pokemon_captured.gif';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

import { useTranslation } from 'react-i18next';
import { bindActionCreators } from 'redux';
import alltheActions from '../../actions';
import { connect } from 'react-redux';

const PokemonCapture = ({ pokemon, actions }) => {
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const [rotate, setrotate] = useState(true);
  const [capturing, setcapturing] = useState(false);
  const [success, setsuccess] = useState(false);

  const finishCapture = async event => {
    history.push('/listPokemon');
  };

  const handleCapturing = () => {
    setcapturing(true);
    const tryCapture = Math.round(Math.random() * 100);
    if (tryCapture > 40) {
      actions.userActions.addPokemonIdCaught({pokemonCaught: pokemon.id});
      actions.userActions.addPokemonIdSeen({pokemonSeen: pokemon.id});
      setsuccess(true);
    } else {
      actions.userActions.addPokemonIdSeen({pokemonSeen: pokemon.id});
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setrotate(rotate ? false : true);
    }, 500);
    return _ => clearTimeout(timeout);
  }, [rotate, capturing]);

  const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemon.id}.png?raw=true`;
  const pokeball = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png`;

  return (
    <DivDetail>
      {capturing ? (
        success ? (
          <>
            <H1Capture>
              {t('capture.captured')}
              {pokemon.name}
            </H1Capture>
            <DivTest>
              <ImagePokeball
                src={pokemoNcaptured}
                animate={{ rotate: rotate ? 1080 : 1080 }}
                transition={{ duration: rotate ? 1 : 1 }}
              ></ImagePokeball>
            </DivTest>
            <ButtonValidation onClick={finishCapture}>Pokedex</ButtonValidation>
          </>
        ) : (
          <>
            <H1Capture>{t('capture.failH1')}</H1Capture>
            <H2Capture>{t('capture.failH2')}</H2Capture>
            <DivTest>
              <img src={failCapture}></img>
            </DivTest>
            <ButtonValidation onClick={finishCapture}>Pokedex</ButtonValidation>
          </>
        )
      ) : (
        <>
          <H1Capture>{t('capture.meetPokemon')}</H1Capture>
          <DivTest>
            <ImagePokemon
              src={imageUrl}
              animate={{ rotate: rotate ? 360 : -360 }}
              transition={{ duration: rotate ? 20 : 20 }}
            ></ImagePokemon>
          </DivTest>
          <DivCaracteristics>
            <Name>
              <b>{t('capture.pokemonName')}</b> {pokemon.name}
            </Name>
            <Type>
              <b>Type(s) : </b>
              {pokemon.types.map(
                type => (
                  (<ParagrapheType>{type.type.name}</ParagrapheType>)
                )
              )}
            </Type>
            <Height>
              <b>{t('capture.pokemonHeight')}</b> {pokemon.height}
            </Height>
            <Weight>
              <b>{t('capture.pokemonWeight')}</b> {pokemon.weight}
            </Weight>
          </DivCaracteristics>
          <DivGoCapture onClick={handleCapturing}>
            <ImagePokeball
              src={goCapture}
              animate={{ rotate: rotate ? -360 : 360 }}
              transition={{ duration: rotate ? 20 : 20 }}
              style={{ width: '5em', height: '5em' }}
            ></ImagePokeball>
          </DivGoCapture>
        </>
      )}
    </DivDetail>
  );
};

const H1Capture = styled.h1`
  text-align: center;
`;
const H2Capture = styled.h2`
  text-align: center;
`;

const ButtonValidation = styled.button`
  /* text:  */
  border: none;
  padding: 10px 5px 10px 5px;
  border-radius: 75%;
  border-bottom: 3px solid white;
  font: bold 13px Arial;
  color: white;
  background: red;
`;

const DivGoCapture = styled.div``;

const ParagrapheType = styled.p`
  margin-left: 5px;
`;

const Name = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

const Type = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  /* width: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between; */
`;

const Weight = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

const Height = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

const DivCaracteristics = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: space-around; */
`;

const ImagePokeball = styled(motion.img)`
  width: 100%;
`;

const ImagePokemon = styled(motion.img)`
  width: 300%;
`;

const DivTest = styled.div`
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const DivDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;


const mapDispatchToProps = () => dispatch =>({
  actions:{
    userActions: bindActionCreators(alltheActions.userActions, dispatch)
  }
});

const mapStateToProps = state => ({
  userState: state.userActions
});

PokemonCapture.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonCapture);