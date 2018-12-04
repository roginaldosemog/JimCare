import { Actions } from 'react-native-router-flux';
import {
  SET_USERNAME,
} from './types';




export const setUsername = user => ({
  type: SET_USERNAME,
  payload: user,
});
