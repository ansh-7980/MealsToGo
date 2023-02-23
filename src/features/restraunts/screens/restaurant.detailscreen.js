import React ,{useState} from "react";
import { RestaurantCard } from "../components/restraunt-info-card.styles";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restraunt-info-card.component";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

export const RestaurantDetailScreen =({route})=>{
    const [breakfastExpanded ,setBreakfastExpanded] =useState(null)
    const [lunchExpanded ,setLunchExpanded] =useState(null)
    const [dinnerExpanded ,setDinnerExpanded] =useState(null)
    const [drinksExpanded ,setDrinksExpanded] =useState(null)
    const { restaurant }=route.params;
    return(
        <SafeArea>
            <RestaurantInfoCard restaurant={restaurant}/>
            <ScrollView>
            <List.Accordion
             title="Breakfast"
             left={(props)=> <List.Icon {...props} icon="bread-slice" />}
             expanded={breakfastExpanded}
             onPress={()=> setBreakfastExpanded(!breakfastExpanded)}
             
             
            >
                <List.Item title="Aalasaqqo Parantha 30pp"/>
                <List.Item title="Mooli Parantha 40pp"/>
                <List.Item title="Pyazi Parantha 25pp"/>
                <List.Item title="Paneery Parantha 70pp"/>
            </List.Accordion>

            <List.Accordion
             title="Lunch"
             left={(props)=> <List.Icon {...props} icon="hamburger" />}
             expanded={lunchExpanded}
             onPress={()=> setLunchExpanded(!lunchExpanded)}
            
            >
                <List.Item title="Aalo Sabzi with Roti 70/-"/>
                <List.Item title="Methi aahbiulo 120/-"/>
                <List.Item title="Razma Chawal rice 130/-"/>
                <List.Item title="Paneer Matraar 250/-"/>
            </List.Accordion>

            <List.Accordion
             title="Dinner"
             left={(props)=> <List.Icon {...props} icon="food-variant" />}
             expanded={dinnerExpanded}
             onPress={()=> setDinnerExpanded(!dinnerExpanded)}
            
            >
                <List.Item title="Aalo Palak 130000/-"/>
                <List.Item title="Dal 140000/-"/>
                
            </List.Accordion>
            <List.Accordion
             title="Drinks"
             left={(props)=> <List.Icon {...props} icon="cup" />}
             expanded={drinksExpanded}
             onPress={()=> setDrinksExpanded(!drinksExpanded)}
            
            >
                <List.Item title="Coca Cola per piece 20/-"/>
                <List.Item title="Limca juice 30/-"/>
                <List.Item title="Shakes 120/-" />
                <List.Item title="Brownie shake 140/-"/>
            </List.Accordion>
            </ScrollView>
        </SafeArea>
    )
}