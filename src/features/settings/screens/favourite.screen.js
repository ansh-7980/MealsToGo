import React ,{useContext} from "react";
import { FavouritesContext } from './../../../service/favourites/favourite.context';
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import styled from "styled-components/native";
import { RestaurantList } from './../../restraunts/components/restaurant.list.styles';
import { TouchableOpacity } from 'react-native';
import { Spacer } from './../../../components/spacer/spacer.component';
import { RestaurantInfoCard } from './../../restraunts/components/restraunt-info-card.component';

const NoFavouritesArea = styled(SafeArea)`
align-items :center;
justify-content: center;

 
`;
export const FavouritesScreen = ({navigation}) => {
    const {favourites} = useContext(FavouritesContext)
    return favourites.length ? (
        <SafeArea>
            <RestaurantList
              data={favourites}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={()=>navigation.navigate("RestaurantDetail",{restaurant:item,})}>
                  <Spacer position="bottom" size="large">
                    <RestaurantInfoCard restaurant={item} />
                  </Spacer>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item)=>item.name}
              contentContainerStyle={{padding:16,marginTop:16}}
            />
        </SafeArea>) : (
        <NoFavouritesArea>
            <Text center>
No favourites f=yet
            </Text>
        </NoFavouritesArea>
    );
};