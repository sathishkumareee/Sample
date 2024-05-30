import React, { FC, useEffect } from 'react'
import { Alert, Platform, Text, View } from 'react-native'
import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid} from 'react-native';
const Club:FC=()=>{
    const getFcmToken = async () => {
        // PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
        try {
            if (Platform.OS === 'android') {
                await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
            } else if (Platform.OS === 'ios') {
                await messaging().requestPermission();
            }
         const authStatus = await messaging().requestPermission();
         const enabled =
           authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
           authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    
         if (enabled) {
           console.log('Authorization status:', authStatus);
           const token = await messaging().getToken();
           console.log('FCM token:', token);
         }

         messaging().onMessage(async message => {
            console.log('Message received while app is in the foreground:', message);
            Alert.alert(`Notification ${message.notification?.body}`);
        });

         messaging().setBackgroundMessageHandler(async remoteMessage => {
            console.log('Message handled in the background!', remoteMessage);
            // Process the message and display notifications as needed
        });
        } catch (error) {
            
        }
      };
    useEffect(()=>{
       getFcmToken();
       },[])
    return(
        <View>
            <Text>Club</Text>
        </View>
    )
}

export default Club