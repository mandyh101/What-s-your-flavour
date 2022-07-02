import React, {useState, useEffect} from "react";
import { getFoodData } from "../apiClient";
import DisplayFlavours from './DisplayFlavours'

export default function FoodSelector(){
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
    <div id="food-selector">
      <label htmlFor="foodOptions">Select your food of choice:</label>
      <select className="food-selector-options" id="foodOptions" name="foodOptions" onChange={e => handleOnChange(e)}>{foodNames}</select>
      <button className="food-selector-button">Let's cook!</button>
      <button className="food-selector-button">Try another combo</button>
    </div>
  )
}

//next steps =>
//pass the foodSelected state to the DisplayRandomFlavourCombo component