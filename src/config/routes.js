import React from 'react';

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';

import backgroundImage from '../pattern.jpg';
import NavBar from '../components/layout/NavBar';
import Pokemon from '../components/pokemon/Pokemon';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DisconnectScreen from '../screens/DisconnectScreen';
import PokemonDetail from '../screens/PokemonDetailScreen';
import Capture from '../screens/captureScreen';
import ListPokemon from '../screens/PokemonListScreen';
import Settings from '../screens/settings';
import Loading from '../components/loading/loading';
import NotFoundScreen from '../screens/NotFoundScreen';

import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';

const Routes = () => {
  return (
    <Router>
        <NavBar />
        <div className='container'>
          <Switch>
            <Route path='/loading' component={Loading} />
            <Route
              exact
              path='/pokemon/:pokemonIndex'
              component={PokemonDetail}
            />
            <PrivateRoute path='/capture' component={Capture} />
            <PrivateRoute path='/listPokemon' component={ListPokemon} />
            <PrivateRoute path='/settings' component={Settings} />
            <PrivateRoute exact path='/pokemon/:pokemonIndex' component={Pokemon} />
            <PublicRoute path='/register' component={RegisterScreen} />
            <PublicRoute path='/login' component={LoginScreen} />
            <PrivateRoute path='/profile' component={ProfileScreen} />
            <PrivateRoute path='/disconnect' component={DisconnectScreen} />
            <PublicRoute path='/notFound' component={NotFoundScreen} />
            <Redirect to='/notFound' />
          </Switch>
        </div>
    </Router>
  );
};

export default Routes;
