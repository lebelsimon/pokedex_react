import React from 'react'

import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import backgroundImage from "../pattern.jpg";
import NavBar from "../components/layout/NavBar";
import Dashboard from "../components/layout/Dashboard";
import Pokemon from "../components/pokemon/Pokemon";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DisconnectScreen from "../screens/DisconnectScreen";
import PokemonDetail from '../screens/PokemonDetailScreen';
import Capture from '../screens/captureScreen';
import ListPokemon from '../screens/PokemonListScreen'
import Settings from '../screens/settings'
import Loading from '../components/loading/loading'

const Routes = () => {
  return (
    <Router>
      <div className="App" style={{background: `url(${backgroundImage})`}}>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path='/loading' component={Loading}/>
            <Route exact path='/pokemon/:pokemonIndex' component={PokemonDetail} />
            <Route path='/capture' component={Capture} />
            <Route path='/listPokemon' component={ListPokemon} />
            <Route path='/settings' component={Settings}/>
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/disconnect" component={DisconnectScreen} />
          </Switch>
        </div>
      </div>
    </Router>
  )
};

export default Routes
