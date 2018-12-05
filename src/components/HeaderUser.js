import React from 'react';
import { StyleSheet, View, Image, Text, ProgressBarAndroid } from 'react-native';
import * as firebase from 'firebase';
import AvatarUser from './AvatarUser';

export default class HeaderUser extends React.Component {
  constructor(props) {
    super(props);

    var user = firebase.auth().currentUser;

    this.state = {
      userName: user.displayName,
  		userLevel: 1,
  		userXP: 0,
  		userAvatar: 0,
    }
  };

  render() {
    return (
      <View style={styles.header}>
        <AvatarUser style={styles.image} avatarId={this.state.userAvatar}/>
        <View style={styles.headerContainer}>
          <Text style={styles.name}>{this.state.userName}</Text>
          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={this.state.userXP}
            color='#2288DD'
            />
          <Text style={styles.level}>LEVEL {this.state.userLevel}</Text>
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
