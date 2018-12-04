import React from 'react';
import { StyleSheet, View, Image, Text, ProgressBarAndroid } from 'react-native';
import img from '../assets/images/icon.png';

export default class HeaderDaily extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Image style={styles.image} source={img}/>
        <View style={styles.headerContainer}>
          <Text style={styles.text}>
            E aí, Igor! Como foi seu dia?
          </Text>
          <Text style={styles.text}>
            Espero que tenha sido ótimo!
          </Text>
          <Text style={styles.text}>
            Marca aí embaixo o que você fez de bom hoje.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  image: {
    width: 96,
    height: 96,
    marginVertical: 16,
  },
  headerContainer: {
    justifyContent: 'center',
    width: '70%',
    height: 96,
    marginVertical: 16,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
  },
});
