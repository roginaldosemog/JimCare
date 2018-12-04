import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import HeaderUser from '../components/HeaderUser';
import CardHistory from '../components/CardHistory';

export default class HistoryScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <HeaderUser/>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <CardHistory/>
        </ScrollView>
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
