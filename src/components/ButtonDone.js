import React from 'react';
import { Appbar } from 'react-native-paper';
import { withNavigation } from 'react-navigation';

class ButtonDone extends React.Component {
  render() {
    return (
      <Appbar.Action
        onPress={this._completeDaily}
        icon="done"
        color="#fff"
      />
    );
  }

  _completeDaily = () => {
    console.log('Daily Done');
    this.props.navigation.navigate('Home', { /* params go here */ })
  };
}

export default withNavigation(ButtonDone);
