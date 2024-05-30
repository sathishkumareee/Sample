import React, { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from "../home";
import Club from "../club";
import Leagues from "../leagues";

const Tab=createBottomTabNavigator()

const Bottomnavigation:FC=()=>{
    return(
        <Tab.Navigator screenOptions={{headerShown:false}} >
            <Tab.Screen name="Dashboard" component={Home} options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require('../../assets/home.png')}
                style={[styles.tabIcon, { tintColor: color }]}                
              />
            ),
          }} />
            <Tab.Screen name="Club" component={Club} options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require('../../assets/football-club.png')}
                style={[styles.tabIcon, { tintColor: color }]}                
              />
            ),
          }}  />
            <Tab.Screen name="Leagues" component={Leagues} options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require('../../assets/football.png')}
                style={[styles.tabIcon, { tintColor: color }]}                
              />
            ),
          }}  />
        </Tab.Navigator>
    )
}


export default Bottomnavigation


const styles = StyleSheet.create({
   
    tabIcon: {
      width: 25,
      height: 25,
    },
  });