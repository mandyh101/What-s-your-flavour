import React, {useState, useEffect} from "react";
import { getFoodData } from "../apiClient";
import DisplayFlavours from './DisplayFlavours'

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
    const foodChoice = e.target.value
    return <DisplayFlavours food={foodChoice}/>
  }


  return(
    <div>
      <label htmlFor="foodOptions">Select your food of choice:</label>
      <select id="foodOptions" name="foodOptions" onChange={e => handleOnChange(e)}>{foodNames}</select>
    </div>
  )
}

//next steps =>
//pass the foodSelected state to the DisplayRandomFlavourCombo component