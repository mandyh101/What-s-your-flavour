import React from 'react'
import FoodSelector from './FoodSelector';
import Title from './Title'
import Header from './Header'

function Home () {

  return ( 
    <div id="container">
    <Header />
    <Title />
    <FoodSelector />
    </div>
    
   );
}

export default Home ;