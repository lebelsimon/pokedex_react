import React, { useState } from 'react';
import styled from 'styled-components';
import spinner from './simple_pokeball.gif';
import { Link } from 'react-router-dom';

const PokemonDetail = ({ pokemon }) => {
  const [loading, setLoading] = useState(true);

  const [toManyRequest, settoManyRequest] = useState(false);
  const pokemonIndex = pokemon.url.split('/')[6];
  const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

  return (
    <DivDetail>
      <Link to={`pokemon/${pokemonIndex}`}>
        <Card>
          <h5>{pokemonIndex}</h5>
          {loading ? (
            <img src={spinner} style={{ width: '5em', height: '5em' }}></img>
          ) : null}
          <Sprite
            onLoad={() => setLoading(false)}
            onError={() => settoManyRequest(true)}
            src={imageUrl}
            style={
              toManyRequest
                ? { display: 'none' }
                : loading
                ? null
                : { display: 'block' }
            }
          />

          <div>
            <h6>
              {pokemon.name}
              {/* //TODO   I18N Majuscule première lettre */}
            </h6>
          </div>
        </Card>
      </Link>
    </DivDetail>
  );
};

const DivDetail = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: transparent;
`;

const Sprite = styled.img`
  width: 5em;
  height: 5em;
  display: none;
`;

const Card = styled.div`
background-color: white;
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

export default PokemonDetail;
