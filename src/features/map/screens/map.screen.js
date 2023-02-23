import React ,{useEffect,useContext,useState} from "react";
import { Text ,View } from "react-native";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { LocationContext } from "../../../service/location/location.context";
import { RestaurantsContext } from "../../../service/restaurants/restaurant.context";
import { Search } from "../component/search.component";
import { Marker ,Callout } from "react-native-maps";
import { MapCallout } from "../component/mapCallout";
const Map = styled(MapView)`

 height: 100%;
 width: 100%;
`;


export const MapScreen =({navigation})=> {

    const {location} =useContext(LocationContext);
    const {restaurants =[] } =useContext(RestaurantsContext);
    const [latDelta ,setLatDelta]= useState(0);
    const {lat,lng,viewport} =location;
    // console.log(viewport)
    useEffect(()=>{
        const northeastLat =viewport.northeast.lat;
        const southwestLat =viewport.southwest.lat;

        
        setLatDelta(northeastLat -southwestLat);

    },[location ,viewport])

    return (
      <>
      <Search />
     <Map
       region ={{
        latitude: lat,
        longitude: lng,
        latitudeDelta: latDelta,
        longitudeDelta: 0.02,
       }}
     
     >
      { restaurants.map((restaurant)=>{
         return (
          
          <Marker
          key={restaurant.name}
          title={restaurant.name}
          coordinate={{
            latitude:restaurant.geometry.location.lat,
            longitude:restaurant.geometry.location.lng,
          }}
          
 >
             <Callout onPress={()=> navigation.navigate("RestaurantDetail",{restaurant,})}>
              <MapCallout restaurant={restaurant} /> 
           </Callout>
  </Marker>

           
           
         )
      })}
     </Map>
     </>
     );
};
