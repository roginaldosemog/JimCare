import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, Button, TextInput, HelperText } from 'react-native-paper';

export default class SignIn extends React.Component {
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
          onPress={() => {
            this.props.navigation.navigate('Main');
          }}
          >
          SIGN IN
        </Button>
      </View>
    );
  }

  _signInClick = () => {
    console.log('Pressed SignIn');
    this.props.navigation.navigate('Daily');
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
