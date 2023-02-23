import React from "react";

import {CompactRestaurantInfo} from "../../../components/restaurant/compactRestaurantInfo";

export const MapCallout =({restaurant})=>{
  return(
  <CompactRestaurantInfo restaurant={restaurant}/>
  )
}