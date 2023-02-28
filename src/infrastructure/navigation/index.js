import React ,{useContext}from "react";
import { AppNavigator } from "./app.navigator";
import { AuthenticationContext } from "../../service/authentication/authentication.context";
import {AccountNavigator} from "./account.navigator";
import { NavigationContainer } from '@react-navigation/native';


export const Navigation = () => {
  const {isAuthenticated} = useContext(AuthenticationContext)
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};