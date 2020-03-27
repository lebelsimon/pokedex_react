import React, { useState } from 'react';
import styled from 'styled-components';
import spinner from './simple_pokeball.gif';
import { Link } from 'react-router-dom';

const PokemonCard = ({ pokemon, imgUrl, caught }) => {
  const [loading, setLoading] = useState(true);
  const [toManyRequest, settoManyRequest] = useState(false);
  const pokemonIndex = pokemon.url.split('/')[6];

  return (
    <DivDetail>
      <Link to={caught ? `pokemon/${pokemonIndex}` : '#'}>
        <Card>
          {loading ? (
            <Sprite src={spinner} alt='loader'/>
          ) : null}
          <Sprite
            onLoad={() => setLoading(false)}
            onError={() => settoManyRequest(true)}
            src={imgUrl}
            style={
              toManyRequest
                ? { display: 'none' }
                : loading
                ? null
                : { display: 'block' }
            }
          />
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
  width: 25%;
  height: 20%;
`;

const Sprite = styled.img`
  @media (max-width: 768px) {
    width: 10em;
    height: 10em;
  }

  @media (max-width: 425px) {
    width: 5em;
    height: 5em;
  }
`;

const Card = styled.div`
  background: radial-gradient(#003, #000);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    cursor: pointer;
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
    
    @keyframes shake {
    10%, 90% {
        transform: translate3d(-1px, 0, 0);
    }
    
    20%, 80% {
        transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
        transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
        transform: translate3d(4px, 0, 0);
    }
  }
  }
  -moz-user-select: none;
  -website-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

export default PokemonCard;
