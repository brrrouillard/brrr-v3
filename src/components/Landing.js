import React, { Component } from "react";

import "./_Landing.css";

export class Landing extends Component {
  render() {
    return (
      <div id="Landing-Section">
        <h1 className="animated fadeInUp">Matthieu Brouillard</h1>
        <h3 className="animated fadeInUp delay-1s">Full-Stack Web Developer</h3>
        <div className="animated fadeIn" id="Social-Container">
          <a href="https://github.com/brrrouillard" target="_blank"><i className="fab fa-github" /></a>
          <a href="www.linkedin.com/in/matthieu-brouillard" target="_blank"><i class="fab fa-linkedin" /></a>
          <a href="mailto:mbrouilla@gmail.com"><i class="fas fa-envelope"></i></a>
        </div>
      </div>
    );
  }
}

export default Landing;
