import React from 'react';
import './App.css';

import LoginComponent from './components/loginComponent';
import RegisterComponent from './components/registerComponent';
import DashboardComponent from './components/dashboardComponent';
import PrivateRoute from './components/privateRouteComponent';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <h2 className="mt-5 text-center">React-Node authentication application demo</h2>
        <Router>
          <nav>
            <ul className="m-0 p-0 text-center">
              <li className="navigationLink">
                <Link to="/login">Login</Link>
              </li>
              <li className="navigationLink">
                <Link to="/register">Register</Link>
              </li>
              <li className="navigationLink">
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/" exact component={LoginComponent}></Route>
            <Route path="/login" exact component={LoginComponent}></Route>
            <Route path="/register" exact component={RegisterComponent}></Route>
            <PrivateRoute path="/dashboard" exact component={DashboardComponent} />
          </Switch>
        </Router>
      </div>
    )
  }
}
export default App;
