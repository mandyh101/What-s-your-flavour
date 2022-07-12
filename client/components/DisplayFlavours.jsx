
import React, {useState, useEffect} from "react";
import { getFoodData, getAllFlavourCombos } from "../apiClient";
import RecipeApi from "./RecipeAPI";

function DisplayFlavour({food}) {
  console.log({food})
 
  const [combos, setCombos] = useState([])
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
    <section id="flavour-display">
      <p>{randomFlavour}</p>
    </section>
      <div className="choose-option">
       
        <button>Try another combo</button>
        
        {/* && logic - if button has value random flavour - call API component 
        if (document.getElementById("input").value == 

        {*/}
        <RecipeApi randomFlavour={randomFlavour} food={food}/>
      </div>
    </>
  );
}


export default DisplayFlavour;