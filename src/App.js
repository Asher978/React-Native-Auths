import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Router, Scene } from 'react-native-router-flux';

import Home from './components/Home';
import Auth from './components/Auth';
import Register from './components/Register';
import Login from './components/Login';



class App extends Component {

  render () {
    return (
      <Router>
        <Scene key='root'>
          <Scene 
            component={Home}
            hideNavBar
            initial
            key='Home'
            title='Home'
          />
  
          <Scene
            component={Login}
            hideNavBar
            key='Login'
            title='Login'
          />
  
  
          <Scene 
            component={Register}
            hideNavBar
            key='Register'
            title='Register'
          />
  
        </Scene>
      </Router>
    )
  }
}

export default App;

