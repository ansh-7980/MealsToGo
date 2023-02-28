import React from "react";
import {StyleSheet, ScrollView , View,Image} from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Favourite } from "../../../components/favourites/favourite.component";
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Text } from "../../../components/typography/text.component";

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "../components/restraunt-info-card.styles";


export const RestaurantInfoCard =({ restaurant ={}})=>{
    const {
        name="Nexus Elante👻",
        location="Mohali ,punjab",
        icon="https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos=["https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80","https://images.unsplash.com/photo-1532117472055-4d0734b51f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"],
        address="Sector 28B , Go via CTU or Cab😁",
        isOpenNow =true,
        rating =4,
        isClosedTemporarily =true,
        placeId,
    }= restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));
   


    return (
        <>
         <RestaurantCard elevation={5} >
          <Favourite restaurant={restaurant}/>
           <RestaurantCardCover key={name}  source ={{uri:photos[0]}}/>
           <Info>
           <Text variant="error">{name}</Text>
           <Section>
           <Rating>
           {
            ratingArray.map((_,i)=>(
              <SvgXml key={`star-${placeId}-${i}`} xml={star}width={20} height={20}/>
                      
            ))
           }
           </Rating>
           <SectionEnd>
              {isClosedTemporarily && (<Text variant="caption" >CLOSED TEMPORARILY</Text>)}
              <Spacer position="left" size="medium"> 
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              </Spacer >
              <Spacer position="left" size="large"> 
              <Icon style={{backgroundColor:'white',height:20,width:20}} source={{ uri: icon }} />
              </Spacer>
            </SectionEnd>
           </Section>
           <Text label="body">{address}</Text>
           </Info>
         </RestaurantCard>
         {/* <RestaurantCard elevation={5} >
           <RestaurantCardCover key={name}source ={{uri:photos[1]}}/>
           <Title>{name}</Title>
         </RestaurantCard>
         <RestaurantCard elevation={5} >
           <RestaurantCardCover key={name}  source ={{uri:photos[2]}}/>
           <Title>{name}</Title>
         </RestaurantCard> */}
        </>  
    
    );
}
