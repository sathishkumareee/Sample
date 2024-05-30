/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import messaging from '@react-native-firebase/messaging';
import {name as appName} from './app.json';

async function initializeFirebase() {
    await messaging().registerDeviceForRemoteMessages();
  }
  

AppRegistry.registerComponent(appName, () => App);

initializeFirebase();
