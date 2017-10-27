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

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' : 'black'}}></Text>
  )
}

const App = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene
          component={Auth}
          hideNavBar
          initial
          key='Auth'
          title='Authentication'
        />

        <Scene 
          component={Home}
          hideNavBar
          key='Home'
          title='Home'
        />
      </Scene>
    </Router>
  )
}

export default App;

