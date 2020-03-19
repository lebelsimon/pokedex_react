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

const Routes = () => {
  return (
    <Router>
      <div className="App" style={{background: `url(${backgroundImage})`}}>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            /* TODO Login relatives screens */
            <Route path="/register" component={SignUpScreen} />
            <Route path="/login" component={SignInScreen} />
            <Route path="/forgot-pw" component={PasswordForgetScreen} />
            <Route path="/profile" component={AccountScreen} />
          </Switch>
        </div>
      </div>
    </Router>
  )
};

export default Routes
