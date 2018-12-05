import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

export default createStackNavigator({
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
  ForgotPassword: ForgotPasswordScreen,
});
