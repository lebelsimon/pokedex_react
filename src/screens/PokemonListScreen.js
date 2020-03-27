import React, { useEffect, useState } from 'react';

import PokemonCard from '../components/pokemon/PokemonCard';

import './style.css';
import ReactPaginate from 'react-paginate';
import {useHistory} from "react-router-dom";
import styled from 'styled-components';
import alltheActions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const PokemonListScreen = props => {
  
  const history = useHistory();
  console.log(props)
  const [page, setPage] = useState(0);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Object.keys(props.userState.user).length === 0 && props.userState.user.constructor === Object) {
      history.push('/login');
    }
    else{
    const handler = setTimeout(() => {
      get();
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }
  }, [offset]);

  const get = async () => {
    try {
      console.log(props);
      props.actions.pokemon.pokemonCall(offset);
      setPage(251 / 20);
      console.log(page);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handlePageClick = data => {
    console.log('data', data);
    
    console.log('page', Math.round(page));
    if(data.selected > page){
    }
    const selected = data.selected;
    const o = Math.ceil(selected * 20);
    setOffset(o);
  };


  return (
    <PokemonList>
      {props.pokemonState.pokemons.map(pokemon => (
        <PokemonCard key={pokemon.name} pokemon={pokemon}></PokemonCard>
      ))}

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

  height: ${props => props.theme.height};

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
  userState: state.userActions,
  themeState: state.theme
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonListScreen);
