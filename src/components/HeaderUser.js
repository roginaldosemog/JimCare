import React from 'react';
import { StyleSheet, View, Image, Text, ProgressBarAndroid } from 'react-native';
import img from '../assets/images/icon.png';
import * as firebase from 'firebase';

export default class HeaderUser extends React.Component {
  constructor(props) {
    super(props);

    var user = firebase.auth().currentUser;

    this.state = {
      name: user.displayName,
      xp: 0,
      level: 0,
    }
  };

  render() {
    return (
      <View style={styles.header}>
        <Image style={styles.image} source={img}/>
        <View style={styles.headerContainer}>
          <Text style={styles.name}>{this.state.name}</Text>
          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={this.state.xp}
            color='#2288DD'
            />
          <Text style={styles.level}>LEVEL {this.state.level}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#048',
    paddingTop: 30,
    justifyContent: 'space-around',
    paddingBottom: 8
  },
  image: {
    width: 96,
    height: 96,
    marginVertical: 16,
  },
  headerContainer: {
    justifyContent: 'center',
    width: '60%',
  },
  name: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
  level: {
    color: '#fff',
    fontWeight: '400',
  },
});
