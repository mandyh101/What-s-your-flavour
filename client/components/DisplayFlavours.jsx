
import React, {useState, useEffect} from "react";
import { getFoodData, getAllFlavourCombos } from "../apiClient";

function DisplayFlavour({food}) {
  console.log({food})
  // const foodselected = props.food
  const [combos, setCombos] = useState([])
  // console.log('food', foodselected)
  
  useEffect(()=>{
    getFoodData()
    .then((foodData) => {
      const obj = foodData.find((item) => item.name === food)
      return(obj) 
    }).then ((obj) => {
      const foodId = String(obj.id)
      return getAllFlavourCombos(foodId)
    }).then ((flavourCombos) => {
      console.log('combos' , flavourCombos)
      setCombos(flavourCombos)
      console.log('flavs', combos)
    })
    .catch((err)=> {
      console.log(err)
    })
  }, [food])



  return ( 
  <>
  <ul>{combos.map(item => <li key={item.FlavourId}>{item.flavour_combo}</li>)}</ul>
  </>
   );
}


export default DisplayFlavour;