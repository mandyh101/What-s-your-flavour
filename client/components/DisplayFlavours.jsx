
import React, {useState, useEffect} from "react";
import { getFoodData } from "../apiClient";
import FoodSelector from "./FoodSelector";

function DisplayFlavour(props) {
  const foodselected = props.food
  console.log('foodselected' , foodselected)
  // const [flavourCombo, setFlavourCombo] = useState([])

  useEffect(()=>{
    getFoodData()
    .then((foodData) => {
    let foodObj = foodData.find((food) => food.name === props.food)
    console.log(props)
    })
    .catch((err)=> {
      console.log(err)
    })
  },[])
  


  return ( 
  <>
  <h1>//</h1>
  </>
   );
}


export default DisplayFlavour;