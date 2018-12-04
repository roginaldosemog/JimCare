import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Alert } from 'react-native';
import { Card, Button } from 'react-native-paper';
import img from '../assets/images/icon.png';

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
        <View style={styles.avatarContainer}>
          <Image style={styles.avatarImage} source={img}/>
          <Text style={styles.avatarText}>AVATAR ESCOLHIDO</Text>
        </View>

        <View style={styles.blockContainer}>
          <View style={styles.lineContainer}>
            <Card
              onPress={() => {
                Alert.alert('NIVEL 1 is Pressed');
              }}
              >
              <Card.Content style={styles.chooseContainer}>
                <Image style={styles.chooseImage} source={img}/>
                <Text style={styles.chooseText}>NIVEL 1</Text>
              </Card.Content>
            </Card>
            <Card
              onPress={() => {
                Alert.alert('NIVEL 2 is Pressed');
              }}
              >
              <Card.Content style={styles.chooseContainer}>
                <Image style={styles.chooseImage} source={img}/>
                <Text style={styles.chooseText}>NIVEL 2</Text>
              </Card.Content>
            </Card>
            <Card
              onPress={() => {
                Alert.alert('NIVEL 3 is Pressed');
              }}
              >
              <Card.Content style={styles.chooseContainer}>
                <Image style={styles.chooseImage} source={img}/>
                <Text style={styles.chooseText}>NIVEL 3</Text>
              </Card.Content>
            </Card>
          </View>

          <View style={styles.lineContainer}>
            <Card
              onPress={() => {
                Alert.alert('NIVEL 4 is Pressed');
              }}
              >
              <Card.Content style={styles.chooseContainer}>
                <Image style={styles.chooseImage} source={img}/>
                <Text style={styles.chooseText}>NIVEL 4</Text>
              </Card.Content>
            </Card>
            <Card
              onPress={() => {
                Alert.alert('NIVEL 5 is Pressed');
              }}
              >
              <Card.Content style={styles.chooseContainer}>
                <Image style={styles.chooseImage} source={img}/>
                <Text style={styles.chooseText}>NIVEL 5</Text>
              </Card.Content>
            </Card>
            <Card
              onPress={() => {
                Alert.alert('NIVEL 6 is Pressed');
              }}
              >
              <Card.Content style={styles.chooseContainer}>
                <Image style={styles.chooseImage} source={img}/>
                <Text style={styles.chooseText}>NIVEL 6</Text>
              </Card.Content>
            </Card>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarContainer: {
    alignItems: 'center',
  },
  avatarImage: {
    width: 128,
    height: 128,
    marginTop: 25,
    marginBottom: 10,
  },
  avatarText: {
    fontSize: 20,
  },
  blockContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  lineContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  chooseContainer: {
    alignItems: 'center',
  },
  chooseImage: {
    width: 96,
    height: 96,
    marginBottom: 6,
  },
  chooseText: {
    fontSize: 18,
  },
});
