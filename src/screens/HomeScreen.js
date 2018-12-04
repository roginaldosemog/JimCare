import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import HeaderUser from '../components/HeaderUser';
import CardDaily from '../components/CardDaily';
import CardChallenge from '../components/CardChallenge';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <HeaderUser/>
        <View style={styles.contentContainer}>
          <CardDaily/>
          <CardChallenge/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 4,
  },
});
