import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';

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
      </View>
    ) 
  }
}

const styles = StyleSheet.create ({
  register: {
    marginTop: 50,
    width: 200,
  },
})

export default Register;