import React from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import { Card, Button, TextInput, HelperText } from 'react-native-paper';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import * as firebase from 'firebase';

export default class ForgotPasswordScreen extends React.Component {
  static navigationOptions = {
    title: "Recuperar Senha",
  };

  state = {
    email: '',
  };

  render() {
    return (
      <View style={{paddingTop:50, alignItems:"center"}}>

        <Text>Forgot Password</Text>

        <TextInput style={{width: 200, height: 40, borderWidth: 1}}
          value={this.state.email}
          onChangeText={(text) => { this.setState({email: text}) }}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          />

        <Button title="Reset Password" onPress={this._resetPassword} />
      </View>
    );
  }

  _resetPassword = () => {
    console.log('Pressed Reset Password');
    firebase.auth().sendPasswordResetEmail(this.state.email)
    .then(() => {
      Alert.alert("Password reset email has been sent.");
    }, (error) => {
      Alert.alert(error.message);
    });
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
