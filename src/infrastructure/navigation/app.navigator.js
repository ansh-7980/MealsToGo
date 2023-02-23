import React from "react";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeArea } from '../../components/utility/safe-area.component';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { RestaurantsScreen } from './../../features/restraunts/screens/restraunts.screen';
import { RestaurantNavigator } from "./restaurants.navigator";
import { MapScreen } from './../../features/map/screens/map.screen';

const Tab = createBottomTabNavigator();

const TAB_ICON ={
  Restaurants:"md-restaurant",
  Map:"md-map",
  Settings:"md-settings"
}

const SettingsScreen =()=>(
  <SafeArea style={{flex:1,justifyContent:'center' , alignItems:"center"}}>
    <Text >Settings</Text>
  </SafeArea>
)
// const MapScreen =()=>(
//   <SafeArea style={{flex:1,justifyContent:'center' , alignItems:"center"}}>
//     <Text >Map</Text>
//   </SafeArea>
// )

const createScreenOptions=({route})=>{
  const iconName = TAB_ICON[route.name];
  return{
    tabBarIcon:({size,color})=>(
      <Ionicons name={iconName} size={27} color={color} />
    ),
  }

}

export const AppNavigator =()=>{
    return(
    <NavigationContainer >
    <Tab.Navigator 
          screenOptions={createScreenOptions}
          tabBarOptions={{
            activeTintColor: "darkgreen",
            inactiveTintColor: "red",
          }}
        >
        <Tab.Screen name="Restaurants" component={RestaurantNavigator} options={{
    headerShown: false
}}/>
        <Tab.Screen name="Map" component={MapScreen} options={{
    headerShown: false
}}/>
        <Tab.Screen name="Settings" component={SettingsScreen} options={{
    headerShown: false
}} />
      </Tab.Navigator>
    </NavigationContainer>
    )
}
