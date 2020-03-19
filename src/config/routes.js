import React from 'react'

import Login from '../screens/login'
import Ranking from '../screens/ranking'
import Timers from '../screens/timers'
import Todos from '../screens/todos'

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'
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
            </Switch>
          </div>
        </div>
      </Router>
  )
}

export default Routes
