import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import AuthNavigator from './AuthNavigator';
import MainTabNavigator from './MainTabNavigator';

export default createSwitchNavigator({
  Auth: AuthNavigator,
  Main: MainTabNavigator,
});
