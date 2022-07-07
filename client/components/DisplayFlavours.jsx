
import React, {useState, useEffect} from "react";
import { getFoodData, getAllFlavourCombos } from "../apiClient";
import RecipeApi from "./RecipeAPI";

function DisplayFlavour({food}) {
  console.log({food})
 
  const [combos, setCombos] = useState([])
  const [randomFlavour, setRandomFlavour] = useState([])
  const [ingredients, setIngredients] = useState([])
  
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
  
  function handleClick(e){
    const ingredientsStr = e.target.value
    const ingredientsArr = ingredientsStr.split(',')
    setIngredients(ingredientsArr)
    console.log('ingred',ingredients)
    //do I need to make ingredients a state?
    //if I pass just the flavour value, the .split doesn't work?
    //or is there a way i need to write the function in the RecipeAPI?

  }

  return ( 
    //div id is flavour display
    <>
    <section id="flavour-display">
      <p>{randomFlavour}</p>
    </section>
      <div className="choose-option">
        <button type="submit" onClick={handleClick} value={randomFlavour}>Lets cook!</button>
        {/* onClick let's cook call external API to get recipe data open the flavour API component
        create recipe state as empty array
        only show recipe component if arraylength(state) is > 0
        recipe is passed as props */}
        <button>Try another combo</button>
        
        {/* && logic - if button has value random flavour - call API component 
        if (document.getElementById("input").value == 

        {*/}
        <RecipeApi ingredients={ingredients}/>
      </div>
    </>
  );
}


export default DisplayFlavour;