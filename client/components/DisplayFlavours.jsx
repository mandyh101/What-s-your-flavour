
import React, {useState, useEffect} from "react";
import { getFoodData, getAllFlavourCombos } from "../apiClient";

function DisplayFlavour({food}) {
  console.log({food})
  const [combos, setCombos] = useState([])
  const [randomFlavour, setRandomFlavour] = useState('')
  
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
      setRandomFlavour(Math.floor(Math.random()*flavoursArr.length))
      console.log('array', flavoursArr)
      console.log('flav to display' , randomFlavour)
    })

    .catch((err)=> {
      console.log(err)
    })
  }, [food])

  // const flavoursArr = combos.map((item) => (item.flavour_combo))
  // setRandomFlavour(Math.floor(Math.random()*flavoursArr.length))


  return ( 
  <>
  {/* <p>{randomFlavour}</p> */}
  {/* <ul>{combos.map(item => <li key={item.FlavourId}>{item.flavour_combo}</li>)}</ul> */}
  </>
   );
}


export default DisplayFlavour;