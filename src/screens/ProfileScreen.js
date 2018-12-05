import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { List, Divider } from 'react-native-paper';
import * as firebase from 'firebase';
import HeaderUser from '../components/HeaderUser';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <HeaderUser />
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <List.Item
            style={styles.listItem}
            left={props => <List.Icon {...props} icon="face" />}
            title="Escolher Avatar"
            onPress={this._openAvatarScreen}
            />
          <Divider />
          <List.Item
            style={styles.listItem}
            left={props => <List.Icon {...props} icon="create" />}
            title="Editar Informações"
            onPress={() => console.log('Pressed Informations Set Button')}
            />
          <Divider />
          <List.Item
            style={styles.listItem}
            left={props => <List.Icon {...props} icon="notifications" />}
            title="Notificações"
            onPress={() => console.log('Pressed Notifications Set Button')}
            />
          <Divider />
          <List.Item
            style={styles.listItem}
            left={props => <List.Icon {...props} icon="share" />}
            title="Compartilhar JimCare"
            onPress={() => console.log('Pressed Share App Button')}
            />
          <Divider />
          <List.Item
            style={styles.listItem}
            left={props => <List.Icon {...props} icon="star" />}
            title="Avalie o Aplicativo"
            onPress={() => console.log('Pressed Rate App Button')}
            />
          <Divider />
          <List.Item
            style={styles.listItem}
            left={props => <List.Icon {...props} icon="exit-to-app" />}
            title="Logout"
            onPress={this._logOut}
            />
          <Divider />
        </ScrollView>
      </View>
    );
  }

  _openAvatarScreen = () => {
    console.log('Pressed Avatar Set Button');
    this.props.navigation.navigate('Avatar');
  };

  _logOut = () => {
    firebase.auth().signOut();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    backgroundColor: '#fdfdfd',
    paddingVertical: 0,
    paddingHorizontal: 6,
  },
});
