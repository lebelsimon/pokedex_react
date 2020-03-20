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

const Routes = () => {
  return (
    <Router>
      <div className="App" style={{background: `url(${backgroundImage})`}}>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/profile" component={ProfileScreen} />
          </Switch>
        </div>
      </div>
    </Router>
  )
};

export default Routes
