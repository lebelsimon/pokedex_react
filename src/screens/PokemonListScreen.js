import React, { useEffect, useState } from 'react';

import PokemonCard from '../components/pokemon/PokemonCard';

import './style.css';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import alltheActions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const PokemonListScreen = props => {
  const [page, setPage] = useState(0);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handler = setTimeout(() => {
      get();
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [offset]);

  const get = async () => {
    try {
      props.actions.pokemon.pokemonCall(offset);
      setPage(251 / 20);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handlePageClick = data => {
    if(data.selected > page){
    }
    const selected = data.selected;
    const o = Math.ceil(selected * 20);
    setOffset(o);
  };

//className={pokemon.id in props.userState.user.pokemonsCaught ? 'visible' : (pokemon.id in props.userState.user.pokemonsSeen ? 'transparent' : 'invisible')}
  return (
    <PokemonList>
      {props.pokemonState.pokemons.map(pokemon => {
        const pokemonIndex = pokemon.url.split('/')[6];
        return(
          <PokemonCard key={pokemon.name} pokemon={pokemon} caught={props.userState.user.pokemonsCaught.includes(pokemon.name)} imgUrl={props.userState.user.pokemonsCaught.includes(pokemon.name) || props.userState.user.pokemonsSeen.includes(pokemon.name) ? `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true` : 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/0.png?raw=true'}/>
        )
      })}

      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={page}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
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
  overflow: auto;
`;

const mapDispatchToProps = () => dispatch => ({
  actions: {
    pokemon: bindActionCreators(alltheActions.pokemon, dispatch)
  }
});
const mapStateToProps = state => ({
  pokemonState: state.pokemon,

  themeState: state.theme,

  userState: state.userActions
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonListScreen);
