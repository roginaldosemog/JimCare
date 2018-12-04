import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, Button, TextInput, HelperText } from 'react-native-paper';

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    email: '',
    password: '',
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <Button
          style={styles.cardButton}
          mode="contained"
          color="#004488"
          onPress={this._signIn}
          >
          SIGN IN
        </Button>
        <Button
          style={styles.cardButton}
          mode="contained"
          color="#004488"
          onPress={this._goToSignUp}
          >
          NO ACCOUNT, SIGN UP
        </Button>
        <Button
          style={styles.cardButton}
          mode="contained"
          color="#004488"
          onPress={this._forgotPassword}
          >
          FORGOT PASSWORD
        </Button>
      </View>
    );
  }

  _signIn = () => {
    console.log('Pressed SignIn');
    this.props.navigation.navigate('Main');
  };

  _goToSignUp = () => {
    console.log('Pressed Go To SignUp');
    this.props.navigation.navigate('SignUp');
  };

  _forgotPassword = () => {
    console.log('Pressed Forgot Password');
    this.props.navigation.navigate('ForgotPassword');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  wrapper: {
    paddingVertical: 20,
  },
  inputContainerStyle: {
    margin: 8,
  },
  cardButton: {
    marginTop: 10,
  },
});
