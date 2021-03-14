import React, { Component } from "react";
import "../../utilities.css";
import "./Skeleton.css";
import "./clock.js";


function openUp() {
  var x = document.getElementById("window");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



class NavBar extends Component {
  
  render() {
    return (
      <>
      <div className="span">
       <button onclick="openUp()"><div className="st">Start</div></button>
       <a href="https://github.com/rabenold/AboutMe/blob/de6c9d8a1d268dcf0a26a6d469f5f2ccbf50e000/Elizabeth%20Rabenold%20Resume%20Dec%202020%20(1).pdf"><div className="tab">My Resume</div></a>
        <button onclick="openUp()"><div className="tab">About </div></button>
        <div className="clock">TIME</div>
      </div>
      <div className="window">Test</div>

      
      
      </>
    );
  }
}

export default NavBar;
