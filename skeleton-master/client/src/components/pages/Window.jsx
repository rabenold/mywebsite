import React, { Component } from "react";
import "../../utilities.css";
import "./Window.css";
  
class Window extends Component {
  
    render() {
      return (
        <>

<div class="box">
    <div class="title">
      <p class="title">Welcome to my website!</p>
    </div>
    <div class="body">
      <p>Made with love in JavaScript, HTML, CSS, and maybe a little React</p>
    <script type="text/javascript" src="hideMe.js"></script>
   

    <button className="but" onclick="hideMe('box')">OK</button>
    </div>

</div>

      
</>
    );
  }
}

export default Window;