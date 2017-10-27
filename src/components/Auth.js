import React, { Component } from 'react';
import { AsyncStorage, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../styles/styles';


class Auth extends Component {
  constructor () {
    super ();
    this.state = {
      username: null,
      password: null,
    }

    this.userLogin = this.userLogin.bind(this);
    this.userSignup = this.userSignup.bind(this);
  }

  // saving the token to AsyncStorage
  async saveToken(token, selectedValue) {
    try {
      await AsyncStorage.setItem(token, selectedValue);
    } catch (err) {
      console.error('AsyncStorage error: ' + err.message)
    }
  }

  // handle for registering user
  userSignup () {
    console.log('login pressed')
    if (this.state.username && this.state.password) {
      fetch('https://app-on-my-feet.herokuapp.com/register')
    }
  }

  // handle for logging in user
  userLogin () {
    if (this.state.username && this.state.password) {
      fetch('https://app-on-my-feet.herokuapp.com/login', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        })
      }).then((res) => res.json())
      .then((jsonRes) => {
        console.log(jsonRes)
        this.saveToken('token', jsonRes.token)
        Actions.Home();
      }).done();
    }
  }

  render () {
    return (
      <View style={styles.container}>
      <Text style={styles.title}> Welcome </Text>

      <View style={styles.form}>
        <TextInput
          editable={true}
          onChangeText={(username) => this.setState({username})}
          placeholder='Username'
          ref='username'
          returnKeyType='next'
          style={styles.inputText}
          value={this.state.username}
        />

        <TextInput
          editable={true}
          onChangeText={(password) => this.setState({password})}
          placeholder='Password'
          ref='password'
          returnKeyType='next'
          secureTextEntry
          style={styles.inputText}
          value={this.state.password}
        />

        <TouchableOpacity style={styles.buttonWrapper} onPress={this.userLogin}>
          <Text style={styles.buttonText}> Log In </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonWrapper} onPress={this.userSignup}>
          <Text style={styles.buttonText}> Sign Up </Text>
        </TouchableOpacity>
      </View>
    </View>
    )
  }
}

export default Auth;