import React, { Component } from "react";
import "./_Navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <div id="Navbar-Section">
        <a href="#">Home</a> 
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    );
  }
}

export default Navbar;
