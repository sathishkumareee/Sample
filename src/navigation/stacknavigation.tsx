import React, { FC, useState } from "react";
import { View } from "react-native";
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Login from "../login";
import Signup from "../signup";
import { LoginContext } from "../context/logincontext";
import Drawernavigation from "./drawernavigation";

const Stack=createStackNavigator();

const Stacknavigation:FC=()=>{
    const [user,setuser]=useState("")
    return(
        <LoginContext.Provider value={{user,setuser}}>
            <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Drawer" component={Drawernavigation} />
            </Stack.Navigator>
        </NavigationContainer>
        </LoginContext.Provider>
    )

}

export default Stacknavigation