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

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route path='/timers' component={Timers}></Route>
        <Route path='/ranking' component={Ranking}></Route>
        <Route path='/todos' component={Todos}></Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default Routes
