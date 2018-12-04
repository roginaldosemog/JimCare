import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import { Appbar } from 'react-native-paper';
import ButtonDone from '../components/ButtonDone';
import HeaderDaily from '../components/HeaderDaily';

export default class DailyScreen extends React.Component {
  static navigationOptions = {
    title: 'Atividades do Dia',
    headerStyle: {
      backgroundColor: '#048',
    },
    headerTintColor: '#fff',
    headerRight: (
      <ButtonDone/>
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <HeaderDaily />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
