
import React, {useState, useEffect} from "react";
import { getFoodData, getAllFlavourCombos } from "../apiClient";
import FoodSelector from "./FoodSelector";

function DisplayFlavour(props) {
  const foodselected = props.food
  const [foodObj, setFoodObj] = useState({})
  console.log('food', foodselected)
  
  useEffect(()=>{
    getFoodData()
    .then((foodData) => {
      setFoodObj(foodData.find((food) => food.name === foodselected))
      console.log(foodObj) 
    }).then ((foodObj) => {
      displayFlavourCombo(foodObj)
    })
    .catch((err)=> {
      console.log(err)
    })
  }, [])

  function displayFlavourCombo(foodObj){
  const foodId = String(foodObj.id)
  getAllFlavourCombos(foodId)
  .then((flavourCombos) => {
    console.log('flavs', flavourCombos)
  })
  .catch((err)=> {
    console.log(err)
  })
  }
    //NEXT
    //write function to call apiClient with foodObj.id
    //map through the results 
    //return a list of flavour combos
  

  return ( 
  <>
  <h1>//</h1>
  </>
   );
}


export default DisplayFlavour;