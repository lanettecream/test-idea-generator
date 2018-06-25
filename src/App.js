import React, { Component } from 'react';
import './App.css';
import TestIdeasHome from './TestIdeasHome.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checklist from './Checklist.js';


const Paths = () => (
  <Router>
    <div>

      <Switch>
        <Route exact path="/" component={TestIdeasHome} />
        <Route path="/checklist" component={Checklist} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </div>
  </Router>
);


class App extends Component {

  render() {
    return (
  <div>
    <Paths />
  </div>);
  }
}

export default App;
