import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { motion } from 'framer-motion';

const PokemonCapture = ({ pokemon }) => {
  const [rotate, setrotate] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setrotate(rotate ? false : true);
    }, 500);
    return _ => clearTimeout(timeout);
  }, [rotate]);

  console.log(pokemon);
  const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemon.id}.png?raw=true`;

  return (
    <DivDetail>
      <h1>Vous avez rencontré un pokémon</h1>
      <DivTest>
        <ImagePokemon
          src={imageUrl}
          animate={{ rotate: rotate ? 360 : -360 }}
          transition={{ duration: rotate ? 20 : 20 }}
        ></ImagePokemon>
      </DivTest>
      <DivCaracteristics>
        <Name>Nom : {pokemon.name}</Name>
        <Type>
            Type(s) :
        {pokemon.types.map(type => (
            console.log(type.type.name),
            <p>{type.type.name}</p>
      ))}
      </Type>
      <Height>Hauteur : {pokemon.height}</Height>
        <Weight>Poids : {pokemon.weight}</Weight>
      </DivCaracteristics>
      <ButtonCapture>Capturez le !</ButtonCapture>
    </DivDetail>
  );
};

const ButtonCapture = styled.button``
const Name = styled.div`
width:50%;
display: flex;
align-items: center;
`

const Type = styled.div`
width:50%;
display: flex;
  flex-direction: row;
  flex-wrap: wrap;
align-items: center;
justify-content: space-between;`

const Weight = styled.div`
width:50%;
display: flex;
align-items: center;`

const Height = styled.div`
width:50%;
display: flex;
align-items: center;`

const DivCaracteristics = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  
`;

const ImagePokemon = styled(motion.img)`
  width: 100%;
`;

const DivTest = styled.div`
  /* background-color: red; */

  display: flex;
  align-items: center;
  justify-content: center;
`;

const DivDetail = styled.div`
  width: 90%;
`;

const Sprite = styled.img`
  width: 5em;
  height: 5em;
  display: none;
`;

const Card = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  -moz-user-select: none;
  -website-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

export default PokemonCapture;
