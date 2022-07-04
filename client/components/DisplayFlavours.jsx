
import React, {useState, useEffect} from "react";
import { getFoodData, getAllFlavourCombos } from "../apiClient";

function DisplayFlavour({food}) {
  console.log({food})
  //an array of flavour combination objects thaat match the food - might not need
  const [combos, setCombos] = useState([])
  //an array of flavour combination objects thaat match the food - might not need
  const [randomFlavour, setRandomFlavour] = useState([])
  
  useEffect(()=>{
    getFoodData()
    .then((foodData) => {
      const obj = foodData.find((item) => item.name === food)
      return(obj) 
    }).then ((obj) => {
      const foodId = String(obj.id)
      return getAllFlavourCombos(foodId)
    }).then ((flavourCombos) => {
      setCombos(flavourCombos)
      const flavoursArr = flavourCombos.map((item) => (item.flavour_combo))
      return flavoursArr
    }).then((flavoursArr) => {
      return setRandomFlavour(flavoursArr[Math.floor(Math.random()*flavoursArr.length)])
    })
    .catch((err)=> {
      console.log(err)
    })
  }, [food])
  


  return ( 
    //div id is flavour display
    <>
      <p>{randomFlavour}</p>
      <div className="choose-option">
        <button>Let's cook!</button>
        <button>Try another combo</button>
      </div>
    </>
  );
}


export default DisplayFlavour;