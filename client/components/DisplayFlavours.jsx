
import React, {useState, useEffect} from "react";
import { getFoodData, getAllFlavourCombos } from "../apiClient";
import RecipeApi from "./RecipeAPI";

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
  
  // console.log('combo', combos)

  return ( 
    //div id is flavour display
    <>
    <section id="flavour-display">
      <p>{randomFlavour}</p>
    </section>
      <div className="choose-option">
        <button>Let's cook!</button>
        {/* onClick let's cook call external API to get recipe data open the flavour API component
        create recipe state as empty array
        only show recipe component if arraylength(state) is > 0
        recipe is passed as props */}
        <button>Try another combo</button>
        <RecipeApi />
      </div>
    </>
  );
}


export default DisplayFlavour;