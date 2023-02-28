import React ,{useState ,useEffect}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider }  from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import {useFonts as useOswald, Oswald_400Regular} from "@expo-google-fonts/oswald";
import {useFonts as uselato ,Lato_400Regular,Lato_700Bold} from "@expo-google-fonts/lato";
import { Navigation } from './src/infrastructure/navigation';
import { AuthenticationContextProvider } from './src/service/authentication/authentication.context';
import {initializeApp} from "firebase/app"
const firebaseConfig = {
  apiKey: "AIzaSyC8XK7yAtV7VyA-_TSS3XBGISjguuyCGnE",
  authDomain: "mealstogo-c257d.firebaseapp.com",
  projectId: "mealstogo-c257d",
  storageBucket: "mealstogo-c257d.appspot.com",
  messagingSenderId: "687093358629",
  appId: "1:687093358629:web:83ee501c0c790d9ab45fcc"
};

// Initialize Firebase


const app= initializeApp(firebaseConfig);


export default function App() {

  // const [isAuthenticated ,setIsAuthenticated] =useState(false);
  // useEffect(()=>{
  //  setTimeout(()=>{ firebase.auth().signInWithEmailAndPassword("ansh@gmail.com" , "123456")
  //   .then((user)=>{
  //     console.log(user)
  //     setIsAuthenticated(true)
  //   }).catch((e)=>{
  //     console.log(e)
  //   });
  //  },2000);
  // },[]);

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
  
// if(!isAuthenticated) return null;
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
       
      <Navigation />
      
      </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}

