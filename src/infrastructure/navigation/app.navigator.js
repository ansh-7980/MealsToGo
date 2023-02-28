import React ,{useContext} from "react";

import { Ionicons } from "@expo/vector-icons";
import { SafeArea } from '../../components/utility/safe-area.component';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { RestaurantsScreen } from './../../features/restraunts/screens/restraunts.screen';
import { RestaurantNavigator } from "./restaurants.navigator";
import { MapScreen } from './../../features/map/screens/map.screen';
import { RestaurantsContextProvider } from "../../service/restaurants/restaurant.context";
import { LocationContextProvider } from "../../service/location/location.context";
import { FavouritesContextProvider } from "../../service/favourites/favourite.context";
import { SettingsScreen } from './../../features/settings/screens/setting.screen';
import { SettingsNavigator } from './settings.navigator';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings"
}

// const MapScreen =()=>(
//   <SafeArea style={{flex:1,justifyContent:'center' , alignItems:"center"}}>
//     <Text >Map</Text>
//   </SafeArea>
// )

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={27} color={color} />
    ),
  }

}



export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
    <LocationContextProvider>
  <RestaurantsContextProvider>

    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "darkgreen",
        inactiveTintColor: "red",
      }}
    >
      <Tab.Screen name="Restaurants" component={RestaurantNavigator} options={{
        headerShown: false
      }} />
      <Tab.Screen name="Map" component={MapScreen} options={{
        headerShown: false
      }} />
      <Tab.Screen name="Settings" component={SettingsNavigator} options={{
        headerShown: false
      }} />
     
    </Tab.Navigator>
    </RestaurantsContextProvider>
      </LocationContextProvider>
      </FavouritesContextProvider>

  )
}
