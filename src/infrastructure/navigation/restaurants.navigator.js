import React from "react";
import {Text} from "react-native";
import {createStackNavigator ,TransitionPresets} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restraunts/screens/restraunts.screen";
import {RestaurantDetailScreen} from "../../features/restraunts/screens/restaurant.detailscreen"
const RestaurantStack =createStackNavigator();

export const RestaurantNavigator =()=>{
    return(
        <RestaurantStack.Navigator headerMode="none" screenOptions={{...TransitionPresets.ModalSlideFromBottomIOS,}}>
            <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
       <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
        </RestaurantStack.Navigator>
    )
}