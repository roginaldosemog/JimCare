import React from 'react';
import { Alert, ScrollView, StyleSheet, Text } from 'react-native';
import {
  Title,
  Caption,
  Paragraph,
  Card,
  Button
} from 'react-native-paper';

export default class CardDaily extends React.Component {
  render() {
    return (
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Text style={styles.cardTitle}>
            ATIVIDADES DIÁRIAS
          </Text>
          <Text style={styles.cardParagraph}>
            Realize atividades que te faz bem, e ganhe pontos.
          </Text>
          <Button
            style={styles.cardButton}
            mode="contained"
            color="#004488"
            onPress={() => console.log('Pressed')}
          >
            MARCAR ATIVIDADES FEITAS HOJE
          </Button>
        </Card.Content>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 4,
  },
  cardContent: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '500',
  },
  cardParagraph: {
    //
  },
  cardButton: {
    marginTop: 10,
  },
});
