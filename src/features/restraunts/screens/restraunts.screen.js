import React ,{useContext}from "react";
import { FlatList, Text, View, StatusBar ,Pressable ,TouchableOpacity } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import SafeAreaView from 'react-native-safe-area-view';
import { SafeArea } from "../../../components/utility/safe-area.component";
import { TextInput, Searchbar } from 'react-native-paper';
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RestaurantInfoCard } from '../components/restraunt-info-card.component';
import styled from 'styled-components/native';
import { RestaurantsContext } from './../../../service/restaurants/restaurant.context';

import { ActivityIndicator } from "react-native-paper";
import { color } from "../../../infrastructure/theme/colors";
import { Search } from './../components/search.component';


const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const SearchContainer= styled.View`
padding:${(props)=>props.theme.space[3]};
backgroundColor:${(props)=>props.theme.color.ui.quaternary};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle:{
    padding:16,
  },
})``;
// const RestaurantListContainer = styled.View`
// flex: 1;
// padding:${(props)=>props.theme.space[1]};
// backgroundColor:${(props)=>props.theme.color.ui.lightgreen};
// `;
export const RestaurantsScreen = ({navigation}) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  
  // console.log(error);
    return(
    <SafeAreaProvider>
        <SafeArea >
        {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={color.blue300} />
        </LoadingContainer>
      )}
            <Search />
            <RestaurantList
              data={restaurants}
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
        </SafeArea>
        <StatusBar style="auto" />
    </SafeAreaProvider>
    )

}

