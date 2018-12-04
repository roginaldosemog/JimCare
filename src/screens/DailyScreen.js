import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import { Appbar } from 'react-native-paper';
import ButtonDone from '../components/ButtonDone';

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
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Daily Page</Text>
            <Text>Essa é a página onde o usuário marcará as atividades feitas no dia.</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  iconHeader: {
    fontSize: 28,
    color: '#fff',
  }
});
