import React from 'react';
import { StyleSheet, View, Image, Text, ProgressBarAndroid } from 'react-native';
import img from '../assets/images/icon.png';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Image style={styles.image} source={img}/>
        <View style={styles.headerContainer}>
          <Text style={styles.name}>Igor Aragão</Text>
          <ProgressBarAndroid style={styles.bar}
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.8}
            color='#28d'
          />
        <Text style={styles.level}>LEVEL 2</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    // flex: 1,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#048',
    paddingTop: 30,
    justifyContent: 'space-around',
    paddingBottom: 8
  },
  image: {
    width: 100,
    height: 100,
    margin: 10
  },
  headerContainer: {
    // borderWidth: 1,
    // borderColor: '#ddd',
    // alignItems: 'center',
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
    fontWeight: '500',
  },
  bar: {},
});
