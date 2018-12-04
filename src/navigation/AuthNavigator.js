import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import SignIn from '../screens/SignIn';

export default createStackNavigator({
  SignIn: SignIn,
});
