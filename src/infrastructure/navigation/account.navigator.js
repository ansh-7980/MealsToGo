import React from "react";
import { View,Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {LoginScreen} from "../../features/account/screen/login.screen"
import {RegisterScreen} from "../../features/account/screen/register.screen"
import { AccountScreen } from './../../features/account/screen/account.screen';
const Stack = createStackNavigator(); 

export const AccountNavigator =()=>(
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Main" component={AccountScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
)