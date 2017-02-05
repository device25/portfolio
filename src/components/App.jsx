import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import WelcomePage from './WelcomePage'
import MainPage from './MainPage'
import NoMatch from './NoMatch'

const App = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={ WelcomePage }/>
      <Route path="/about" component={ MainPage }/>
      <Route path="/career" component={ MainPage }/>
      <Route path="/portfolio" component={ MainPage }/>
      <Route component={ NoMatch }/>
    </Switch>
  </HashRouter>
);

export default App