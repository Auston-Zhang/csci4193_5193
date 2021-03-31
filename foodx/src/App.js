import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import 'font-awesome/css/font-awesome.css';

import './global.scss';

import Landing from './components/page/Landing';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Footer />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;