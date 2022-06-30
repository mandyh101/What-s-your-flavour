import React, {useState, useEffect} from "react";
import { getFoodData } from "../apiClient";

export function FoodSelector(){
  const [foodNames, setFoodNames] = useState([])
  // const [foodSelected, setFoodSelected] = useState([])

  useEffect(()=>{
    getFoodData()
    .then((foodData) => {
    setFoodNames(foodData.map((food) => <option key={food.id} value={food.name}>{food.name}</option>)) 
    })
    .catch((err)=> {
      console.log(err)
    })
  },[])

  function handleOnChange(e){
    const foodSelected = e.target.value
    console.log(foodSelected)
    // setFoodSelected(foodNames.filter((food) => food === e.target.value))
    // console.log(foodSelected)
  }


  return(
    <div>
      <label htmlFor="foodOptions">Select your food of choice:</label>
      <select id="foodOptions" name="foodOptions" onChange={e => handleOnChange(e)}>{foodNames}</select>
    </div>
  )
}

//next steps =>
//add onChange to select open tag and call handleOnChange function
//write handleOnChange function that will set the foodSelected state
//pass the foodSelected state to the DisplayRandomFlavourCombo component