import React, { Component } from "react";
import "../../utilities.css";
import "./Skeleton.css";
import "./clock.js";






class NavBar extends Component {
  
  render() {
    return (
      <>

      <div className="span">
        <div className="st">Start</div>
        <div className="tab">My Resume</div>
        <div className="tab">About</div>  
        <div className="clock">TIME</div>
      </div>
      
      
      </>
    );
  }
}

export default NavBar;
