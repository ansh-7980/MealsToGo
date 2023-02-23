import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ThemeProvider }  from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import {useFonts as useOswald, Oswald_400Regular} from "@expo-google-fonts/oswald";
import {useFonts as uselato ,Lato_400Regular,Lato_700Bold} from "@expo-google-fonts/lato";
import {RestaurantsContextProvider} from "./src/service/restaurants/restaurant.context";
import { LocationContextProvider } from './src/service/location/location.context';
import { FavouritesContextProvider } from './src/service/favourites/favourite.context';
import { Navigation } from './src/infrastructure/navigation';

export default function App() {

  const [oswaldLoaded]= useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded]= uselato({
    Lato_400Regular,
    Lato_700Bold
  });

if(!oswaldLoaded || !latoLoaded){
    return null;
  }
  

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
        <LocationContextProvider>
      <RestaurantsContextProvider>
      <Navigation />
      </RestaurantsContextProvider>
      </LocationContextProvider>
      </FavouritesContextProvider>
      </ThemeProvider>
    </>
  );
}

