import React, { useContext, useState ,useEffect} from "react";
import styled from "styled-components";
import {Searchbar } from 'react-native-paper';
import { LocationContext } from './../../../service/location/location.context';

const SearchContainer= styled.View`
padding:${(props)=>props.theme.space[3]};
backgroundColor:${(props)=>props.theme.color.ui.quaternary};
`;
export const Search =({isFavouritesToggled ,onFavouritesToggle})=>{
    const {keyword ,search} =useContext(LocationContext)
    const [searchKeyword , setSearchKeyword] = useState(keyword)
    // console.log(LocationContext)
    // console.log(searchKeyword)
    
    useEffect(()=>{
      setSearchKeyword(keyword)
  },[keyword]);

    return(
    <SearchContainer >
      <Searchbar icon={isFavouritesToggled ? "heart" :"heart-outline"} onIconPress={onFavouritesToggle} placeholder="search for a location?" value={searchKeyword} onSubmitEditing={()=>{
        search(searchKeyword);
      }} onChangeText={(text)=>{
       
        setSearchKeyword(text)
      }}/>
     </SearchContainer>
    )
}