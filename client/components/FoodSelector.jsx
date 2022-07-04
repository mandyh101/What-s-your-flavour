import React, {useState, useEffect} from "react";
import { getFoodData } from "../apiClient";
import DisplayFlavours from './DisplayFlavours'

export default function FoodSelector(){
  const [foodNames, setFoodNames] = useState([])
  const [foodSelected, setFoodSelected] = useState([])


  useEffect(()=>{
    getFoodData()
    .then((foodData) => {
    setFoodNames(foodData.map((food) => <option key={food.id} value={food.name}>{food.name}</option>)) 
    console.log('list', foodNames)
    })
    .catch((err)=> {
      console.log(err)
    })
  },[])



  function handleOnChange(e){
    setFoodSelected(e.target.value)
    console.log('selected', foodSelected)
    console.log('list', foodNames)

    //do I need to reset the state after?
    }

   

  return(
    <div>
      <section id="food-selector">
        <label htmlFor="foodOptions">Select your food of choice:</label>
        <select className="food-selector-options" id="foodOptions" name="foodOptions" onChange={e => handleOnChange(e)}>{foodNames}</select>
      </section>
      <section id="flavour-display">
        <DisplayFlavours food={foodSelected}/>
      </section>
    </div>
  )
}

//next steps =>
//pass the foodSelected state to the DisplayRandomFlavourCombo component