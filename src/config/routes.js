import React from 'react'

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'

import Dashboard from '../components/layout/Dashboard';
import PokemonDetail from '../screens/PokemonDetailScreen';
import Capture from '../screens/captureScreen';
import ListPokemon from '../screens/PokemonListScreen'
import Settings from '../screens/settings'
import Loading from '../components/loading/loading'

const Routes = () => {
  return (
    <Router>
      {/* <div className='App' style={{ background: `url(${backgroundImage})` }}> */}
        {/* <NavBar /> */}
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            
            <Route path='/loading' component={Loading}/>
            <Route exact path='/pokemon/:pokemonIndex' component={PokemonDetail} />
            <Route path='/capture' component={Capture} />
            <Route path='/listPokemon' component={ListPokemon} />
            <Route path='/settings' component={Settings}/>
            <Redirect to='/' />
          </Switch>
        </div>
      {/* </div> */}
    </Router>
  );
};

export default Routes
