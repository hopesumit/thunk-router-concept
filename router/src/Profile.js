import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Not from './Not';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'

class Profile extends Component {
  render() {
    return (
      <div>
     <h1>Profile</h1>
        <Route path="profile/home" component={Home} />
     </div>
    );
  }
}

export default Profile;
