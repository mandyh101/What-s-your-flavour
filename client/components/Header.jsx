import React from "react";
import Navbar from './Navbar'

function Header () {
  return (
    <>
    <div id="menu">
    <Navbar />
    <button className="login-button">Log in</button>
    </div>
    </>
    );
}

export default Header ;