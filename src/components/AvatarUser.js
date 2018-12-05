import React from 'react';
import { Image } from 'react-native';

export default class AvatarUser extends React.Component {
  state = {
    images: [
      require('../assets/avatar/avatar0.png'),
      require('../assets/avatar/avatar1.png'),
      require('../assets/avatar/avatar2.png'),
      require('../assets/avatar/avatar3.png'),
      require('../assets/avatar/avatar4.png'),
      require('../assets/avatar/avatar5.png'),
    ]
  };

  render() {
    return (
      <Image
        style={this.props.style}
        source={this.state.images[this.props.avatarId]}
      />
    );
  }
}
