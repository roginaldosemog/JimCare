import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import { Appbar, List, Divider, Checkbox } from 'react-native-paper';
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

  state = {
    expanded: true,
    checkedSoccer: false,
    checkedSwimming: false,
    checkedTravel: false,
    checkedChurch: false,
  }

  _handlePress = () => this.setState({
    expanded: !this.state.expanded
  });

  render() {
    return (
      <View style={styles.container}>
        <HeaderDaily />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            O QUE VOCÊ FEZ HOJE, QUE TE FEZ FELIZ?
          </Text>
        </View>
        <ScrollView style={styles.listContainer} contentContainerStyle={styles.contentContainer}>
          <List.Accordion
            style={styles.listAccordion}
            title="Atividades Fisicas"
            left={props => <List.Icon {...props} icon="directions-bike" />}
            >
            <List.Item
              style={styles.listItem}
              title="Jogar Futebol"
              right={
                props =>
                <Checkbox {...props} status={this.state.checkedSoccer ? 'checked' : 'unchecked'} />
              }
              onPress={() =>
                this.setState(state => ({
                  checkedSoccer: !state.checkedSoccer,
                })
              )}
            />
            <Divider />
              <List.Item
                style={styles.listItem}
                title="Nadar"
                right={
                  props =>
                  <Checkbox {...props} status={this.state.checkedSwimming ? 'checked' : 'unchecked'} />
                }
                onPress={() =>
                  this.setState(state => ({
                    checkedSwimming: !state.checkedSwimming,
                  })
                )}
              />
          </List.Accordion>
          <Divider />
          <List.Accordion
            style={styles.listAccordion}
            title="Rolês"
            left={props => <List.Icon {...props} icon="flight-takeoff" />}
            >
            <List.Item
              style={styles.listItem}
              title="Viajar"
              right={
                props =>
                <Checkbox {...props} status={this.state.checkedTravel ? 'checked' : 'unchecked'} />
              }
              onPress={() =>
                this.setState(state => ({
                  checkedTravel: !state.checkedTravel,
                })
              )}
            />
            <Divider />
              <List.Item
                style={styles.listItem}
                title="Ir à Igreja"
                right={
                  props =>
                  <Checkbox {...props} status={this.state.checkedChurch ? 'checked' : 'unchecked'} />
                }
                onPress={() =>
                  this.setState(state => ({
                    checkedChurch: !state.checkedChurch,
                  })
                )}
              />
          </List.Accordion>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    marginTop: 14,
  },
  listAccordion: {
    backgroundColor: '#fdfdfd',
    justifyContent: 'center',
    paddingVertical: 0,
    paddingHorizontal: 6,
  },
  listItem: {
    paddingLeft: 64,
    paddingVertical: 6,
  },
});
