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
        <button onclick="openUp()"><div className="tab">My Resume</div></button>
        <button onclick="openUp()"><div className="tab">About </div></button>
        <div className="clock">TIME</div>
      </div>
      <div className="window">Test</div>

      
      
      </>
    );
  }
}

export default NavBar;
