import React from 'react';

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DisconnectScreen from '../screens/DisconnectScreen';
import PokemonDetail from '../screens/PokemonDetailScreen';
import Capture from '../screens/captureScreen';
import ListPokemon from '../screens/PokemonListScreen';
import Settings from '../screens/settings';
import NotFoundScreen from '../screens/NotFoundScreen';

import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';

const Routes = () => {
  return (
    <Router>
        <div className='container'>
          <Switch>
            <PrivateRoute path='/capture' component={Capture} />
            <PrivateRoute path='/listPokemon' component={ListPokemon} />
            <PrivateRoute path='/settings' component={Settings} />
            <PrivateRoute exact path='/pokemon/:pokemonIndex' component={PokemonDetail} />
            <PublicRoute path='/register' component={RegisterScreen} />
            <PublicRoute path='/login' component={LoginScreen} />
            <PrivateRoute path='/profile' component={ProfileScreen} />
            <PrivateRoute path='/disconnect' component={DisconnectScreen} />
            <PublicRoute path='/notFound' component={NotFoundScreen} />
            <Redirect to='/login' />
          </Switch>
        </div>
    </Router>
  );
};

export default Routes;
