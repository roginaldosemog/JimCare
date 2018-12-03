import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { List, Divider } from 'react-native-paper';
import HeaderUser from '../components/HeaderUser';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    expanded: true
  }

  _handlePress = () =>
  this.setState({
    expanded: !this.state.expanded
  });

  render() {
    return (
      <View style={styles.container}>
        <HeaderUser />
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Divider />
          <List.Item
            style={styles.listItem}
            left={props => <List.Icon {...props} icon="directions-bike" />}
            title="Definir Atividades"
            onPress={() => console.log('Pressed Activities Set Button')}
            />
          <Divider />
          <List.Item
            style={styles.listItem}
            left={props => <List.Icon {...props} icon="face" />}
            title="Escolher Avatar"
            onPress={() => console.log('Pressed Avatar Set Button')}
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
            onPress={() => console.log('Pressed Logout Button')}
            />
          <Divider />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    backgroundColor: '#fdfdfd',
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
});
