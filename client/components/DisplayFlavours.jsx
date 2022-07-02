
import React, {useState, useEffect} from "react";
import { getFoodData } from "../apiClient";
import FoodSelector from "./FoodSelector";

function DisplayFlavour(props) {
  const foodselected = props.food
  const [foodObj, setFoodObj] = useState({})
  console.log('food', foodselected)
  // const [flavourCombo, setFlavourCombo] = useState([])
    getFoodData()
    .then((foodData) => {
      setFoodObj(foodData.find((food) => food.name === props.food))
    })
    //function to call apiClient with foodObj.id
    //map through the results 
    //return a list of flavour combos
    .catch((err)=> {
      console.log(err)
    })
  
  


  return ( 
  <>
  <h1>//</h1>
  </>
   );
}


export default DisplayFlavour;