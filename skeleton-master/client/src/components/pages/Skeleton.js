import React, { Component } from "react";
import "../../utilities.css";
import "./Skeleton.css";
import NavBar from "./navbar.jsx";
import Desktop from "./desktop.jsx";
//TODO: REPLACE WITH YOUR OWN CLIENT_ID
class Skeleton extends Component {
  

  render() {
    return (
      <>
    <Desktop/>
    <NavBar>
      
    </NavBar>
      

      {/* <NavBar>Hello</NavBar> */}
      {/* <h2>Test</h2> */}
    {/* <NavBar/> */}
      {/* <div className="span">

        <div className="tab">Resume</div>
        <div className="tab">About</div>
        

        
      </div> */}
      
      
      </>
    );
  }
}

export default Skeleton;
