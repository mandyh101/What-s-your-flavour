import React, {useState, useEffect} from "react";
import { getFoodData } from "../apiClient";

export function FoodSelector(){
  const [foodNames, setFoodNames] = useState([])

  useEffect(()=>{
    getFoodData()
    .then((foodData) => {
    setFoodNames(foodData.map((food) => <option key={food.id}>{food.name}</option>)) 
    })
    .catch((err)=> {
      console.log(err)
    })
  },[])


  return(
    <div>
      <label htmlFor="foodOptions">Select your food of choice:</label>
      <select id="foodOptions" name="foodOptions">{foodNames}</select>
    </div>
  )
}