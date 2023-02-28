import React from "react";
import styled from "styled-components/native";
import { ScrollView ,TouchableOpacity} from "react-native";
import { Spacer } from "../../components/spacer/spacer.component";
import { CompactRestaurantInfo } from './../../components/restaurant/compactRestaurantInfo';
import { Text } from "../../components/typography/text.component";
const FavouritesWrapper =styled.View`
    padding:10px;

`;

export const FavouriteBar = ({favourites ,onNavigate}) => {
  if(!favourites.length){
    return null;
  }  
return(
 <FavouritesWrapper>
    <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
    </Spacer>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant)=>{
            const key =restaurant.name;
            return(
                <Spacer key={key} position="left" size="medium">
                    <TouchableOpacity onPress={()=>onNavigate("RestaurantDetail",{restaurant,})}>
                    <CompactRestaurantInfo restaurant={restaurant}/>
                    </TouchableOpacity>

                 </Spacer>
            )
        })}

    </ScrollView>
 </FavouritesWrapper>

)
    };
  