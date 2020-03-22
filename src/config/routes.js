import React from 'react'

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'
import backgroundImage from '../pattern.jpg';
import NavBar from '../components/layout/NavBar';
import Dashboard from '../components/layout/Dashboard';
import Pokemon from '../components/pokemon/Pokemon';
import Capture from '../screens/captureScreen';
import ListPokemon from '../screens/PokemonListScreen'

const Routes = () => {
  return (
    <Router>
      {/* <div className='App' style={{ background: `url(${backgroundImage})` }}> */}
        {/* <NavBar /> */}
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/pokemon/:pokemonIndex' component={Pokemon} />
            <Route path='/capture' component={Capture} />
            <Route path='/listPokemon' component={ListPokemon} />
            <Redirect to='/' />
          </Switch>
        </div>
      {/* </div> */}
    </Router>
  );
};

export default Routes
