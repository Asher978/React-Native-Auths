import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';

class Login extends Component {
  constructor () {
    super ();
    this.state = {
      loginUsername: null,
      loginPassword: null,
    }

    this.upDateForm = this.upDateForm.bind(this);
    this.userLogin = this.userLogin.bind(this);

  }

  upDateForm (fieldName) {
    return (event) => {
      this.setState({
        [fieldName]: event.nativeEvent.text,
      })
    }
  }

  userLogin = () => {
    console.log('login pressed!')
    console.log(this.state.loginUsername && this.state.loginPassword)
    if (this.state.loginUsername && this.state.loginPassword) {
      fetch('https://app-on-my-feet.herokuapp.com/login', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: this.state.loginUsername,
          password: this.state.loginPassword,
        })
      }).then((res) => res.json())
      .then((jsonRes) => {
        console.log(jsonRes)
        this.saveToken('token', jsonRes.token)
        alert(`Welcome back ${jsonRes.user.firstname}`);
      }).done();
    }
  }

  // saving the token to AsyncStorage
  async saveToken(token, selectedValue) {
    try {
      await AsyncStorage.setItem(token, selectedValue);
    } catch (err) {
      console.error('AsyncStorage error: ' + err.message)
    }
  }


  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> LOG IN </Text>
  
        <View style={styles.form}>
          <TextInput
            editable
            onChange={this.upDateForm('loginUsername')}
            placeholder='Username'
            returnKeyType='next'
            style={styles.inputText}
            value={this.loginUsername}
          />
  
          <TextInput
            editable={true}
            onChange={this.upDateForm('loginPassword')}
            placeholder='Password'
            returnKeyType='next'
            secureTextEntry
            style={styles.inputText}
            value={this.loginPassword}
          />
  
          <TouchableOpacity style={styles.buttonWrapper} onPress={this.userLogin}>
            <Text style={styles.buttonText}> LOG IN </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonWrapper} onPress={() => Actions.pop()}>
            <Text style={styles.buttonText}> BACK </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Login;