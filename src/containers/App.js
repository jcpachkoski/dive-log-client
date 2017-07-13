import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Login from '../Login';
import Main from '../Main';

import Welcome from '../views/welcome'
import Dashboard from '../views/dashboard'

import { getQueryParams } from '../utils';

class App extends Component {
  constructor() {
    super();

    const params = getQueryParams();
    this.state = { token: params.token };
  }

  isLoggedIn() {
    return !!this.state.token;
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => (
              this.isLoggedIn() ? (
                <Redirect to="/dashboard" />
              ) : (
                <Welcome />
              )
            )}/>
            <Route exact path="/dashboard" render={() => (
              this.isLoggedIn() ? (
                <Dashboard />
              ) : (
                <Redirect to="/"/>
              )
            )}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
