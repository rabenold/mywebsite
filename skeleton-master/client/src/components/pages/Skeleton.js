import React, { Component } from "react";
import "../../utilities.css";
import "./Skeleton.css";
import NavBar from "./Navbar.jsx";
import Desktop from "./desktop.jsx";
class Skeleton extends Component {
  

  render() {
    return (
      <>
      
    <Desktop/>
    <NavBar/>
    
           
      
      </>
    );
  }
}

export default Skeleton;
