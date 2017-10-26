import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
import Button from 'apsl-react-native-button';


class Register extends Component {

  render () {
    return (
      <View>
        <Sae
          label={'User Name'}
          iconClass={FontAwesomeIcon}
          iconName={'pencil'}
          iconColor={'black'}
          // TextInput props
          autoCapitalize={'none'}
          autoCorrect={false}
          style={styles.register}
          inputStyle={{ color: 'black' }}
        />
        <Sae
          label={'Password'}
          iconClass={FontAwesomeIcon}
          iconName={'pencil'}
          iconColor={'black'}
          // TextInput props
          autoCapitalize={'none'}
          autoCorrect={false}
          style={styles.register}
          inputStyle={{ color: 'black' }}
          secureTextEntry
        />
        <Sae
          label={'Email'}
          iconClass={FontAwesomeIcon}
          iconName={'pencil'}
          iconColor={'black'}
          // TextInput props
          autoCapitalize={'none'}
          autoCorrect={false}
          style={styles.register}
          inputStyle={{ color: 'black' }}
        />
        <Sae
          label={'First Name'}
          iconClass={FontAwesomeIcon}
          iconName={'pencil'}
          iconColor={'black'}
          // TextInput props
          autoCapitalize={'none'}
          autoCorrect={false}
          style={styles.register}
          inputStyle={{ color: 'black' }}
        />
        <Sae
          label={'Last Name'}
          iconClass={FontAwesomeIcon}
          iconName={'pencil'}
          iconColor={'black'}
          // TextInput props
          autoCapitalize={'none'}
          autoCorrect={false}
          style={styles.register}
          inputStyle={{ color: 'black' }}
        />
        <Button style={styles.regBtn}>Register</Button>
      </View>
    ) 
  }
}

const styles = StyleSheet.create ({
  register: {
    marginTop: 50,
    width: 200,
  },
  regBtn: {
    margin: 5,
  }
})

export default Register;