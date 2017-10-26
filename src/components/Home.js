import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from 'apsl-react-native-button';

class Home extends Component {


  render () {
    return (
      <View>
        <Text>Welcome to React Native Auths</Text>
        <Button  style={styles.buttons} textStyle={{fontSize: 18}}>Login!</Button>
        <Button style={styles.buttons} textStyle={{fontSize: 18}}>Register!</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  buttons: {
    backgroundColor: 'blue'
  },
})

export default Home;