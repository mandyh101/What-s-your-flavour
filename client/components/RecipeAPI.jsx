import React, {useState, useEffect} from "react";
import { getRecipes } from '../apiClient'


function RecipeApi() {
  const [recipes, setRecipes] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getRecipes()
    .then((res) => {
      setRecipes(res)
    })
    .finally(() => {
      setLoading(false)
    })
    .catch(() => {
      setError(true)
    })
  }, [])
  
    if (loading) return <div>loading!</div>
    if (error) return <div>error</div>
    console.log(recipes)
    
  return (  
    <div>

    </div>
  );
}

export default RecipeApi ;