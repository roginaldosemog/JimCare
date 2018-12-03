import React from 'react';
import { StyleSheet, View, Image, Text, ProgressBarAndroid } from 'react-native';
import img from '../assets/images/icon.png';

export default class HeaderUser extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Image style={styles.image} source={img}/>
        <View style={styles.headerContainer}>
          <Text style={styles.name}>Igor Aragão</Text>
          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.8}
            color='#2288DD'
          />
        <Text style={styles.level}>LEVEL 2</Text>
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
