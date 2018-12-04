import React from 'react';
import { Alert, ScrollView, StyleSheet, Text, View, Image, ProgressBarAndroid } from 'react-native';
import {
  Title,
  Caption,
  Paragraph,
  Card,
  Button
} from 'react-native-paper';
import img from '../assets/images/icon.png';

export default class CardHistory extends React.Component {
  render() {
    return (
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <View style={styles.dateContainer}>
            <Text style={styles.dayDate}>28</Text>
            <Text style={styles.monthDate}>AGO</Text>
            <Text style={styles.yearDate}>2018</Text>
          </View>
          <View style={styles.activitiesContainer}>
            <Text style={styles.textActivities}>- Futebol</Text>
            <Text style={styles.textActivities}>- Natação</Text>
            <Text style={styles.textActivities}>- Cinema</Text>
          </View>
          <View style={styles.pointsContainer}>
            <Text style={styles.valuePoints}>50</Text>
            <Text style={styles.textPoints}>PONTOS</Text>
          </View>
        </Card.Content>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    //flex: 1,
    margin: 4,
    backgroundColor: '#28d',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  activitiesContainer: {
    justifyContent: 'center',
  },
  pointsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayDate: {
    color: '#fff',
    fontSize: 44,
    fontWeight: '500',
    includeFontPadding: false,
  },
  monthDate: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
    includeFontPadding: false,
  },
  yearDate: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '500',
    includeFontPadding: false,
  },
  textActivities: {
    color: '#fff',
    fontSize: 18,
  },
  valuePoints: {
    color: '#fff',
    fontSize: 44,
    fontWeight: '500',
    includeFontPadding: false,
  },
  textPoints: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '400',
    includeFontPadding: false,
  },
});
