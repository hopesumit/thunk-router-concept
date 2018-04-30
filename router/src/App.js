import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Profile from './Profile';
import Not from './Not';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
    <div>
     <h1>App</h1>
     <Link to="/home"><h1>Home</h1></Link>
     <Link to="/profile"><h1>Profile</h1></Link>
      <Route exact path="/home" component={Home} />
      <Route exact path="/profile" component={Profile} />
    </div>
    );
  }
}

export default App;
