import React, { Component } from "react";
import "../../utilities.css";
import "./Desktop.css";
import linkedInLogo from "./linkedin.png";
import artInstagram from "./instagram.png";
import facebook from "./facebook.png";
import gitHub from "./github.png";
import Window from "./Window.jsx";



class Desktop extends Component {
  
  render() {
    return (
      <>


<div className="bg">
  

  <div className="icon">
  <figure>
  <a href="https://www.linkedin.com/in/EllieRabenold">
  <img src={linkedInLogo} alt="LinkedIn" width="80px" height="80px"/>
      </a>
      <figcaption> LinkedIn </figcaption>
</figure>
  </div>

  <div className="icon">
  <figure>
  <a href="https://www.instagram.com/leraybenold">
  <img src={artInstagram} alt="Instagram" width="80px" height="80px"/>
      </a>
      <figcaption> Instagram </figcaption>
</figure>
  </div>
  
  <div className="icon">
  <figure>
  <a href="https://www.facebook.com/ellie.rabenold.1">
  <img src={facebook} alt="Facebook" width="80px" height="80px"/>
      </a>
      <figcaption> Facebook </figcaption>
</figure>
  </div>

  
  <div className="icon">
  <figure>
  <a href="https://github.com/rabenold/mywebsite">
  <img src={gitHub} alt="GitHub" width="80px" height="80px"/>
      </a>
      <figcaption> GitHub </figcaption>
</figure>
<Window></Window>

  </div>




</div>

      
      
      </>
    );
  }
}

export default Desktop;
