import React, {useState, useEffect} from "react";
import { getFoodData } from "../apiClient";

export function FoodSelector(){
  const [foodNames, setFoodNames] = useState([])

  useEffect(()=>{
    getFoodData()
    .then((foodData) => {
    setFoodNames(foodData.map((food) => <li key={food.id}>{food.name}</li>)) 
    })
    .catch((err)=> {
      console.log(err)
    })
  },[])


  return(
    <div>
      <h1>Choose your food:</h1>
      <ul>
        {foodNames}
        {console.log(foodNames)}
      </ul>
    </div>
  )
}