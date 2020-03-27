import React from 'react';
import styled from 'styled-components'


const PokemonDetail = ({pokemon}) => {

    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemon.id}.png?raw=true`
    return (
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

export default PokemonDetail;