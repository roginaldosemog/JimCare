import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';

export default class AvatarScreen extends React.Component {
  static navigationOptions = {
    title: 'Escolher Avatar',
    headerStyle: {
      backgroundColor: '#048',
    },
    headerTintColor: '#fff',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Avatar Page</Text>
            <Text>Essa é a página onde o usuário escolherá o seu próprio avatar.</Text>
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
});
