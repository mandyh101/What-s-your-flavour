import React from "react";
// import MainImage from "../images/home-image.jpg"

function Title () {
  return (  
    <>
    <div className="main">
      <div className="main-content">
        <h1 className="headline">What's your flavour?</h1>
        <p className="tagline">
          Bring out the best of any dish!</p>
      </div>
      <div className="main-img">
        <img src="/images/home-image.jpg" alt="display of spices" />
      </div>
    </div>
    </>
  );
}

export default Title ;