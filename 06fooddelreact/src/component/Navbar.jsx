import React from "react";
import Restorainticon from './Restorainticon.png';

function Navbar() {
    return(
      
         <nav id="navbar">
      <img src={Restorainticon} alt="Restaurant Icon" className="navbar-img" />
      <ul id="navcontent">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="content.html">Contact Us</a></li>
      </ul>
    </nav>
        
    );
}

export default Navbar