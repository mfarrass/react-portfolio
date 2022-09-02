import React from "react";
import "./intro.scss";
import { init } from 'ityped'
import { useEffect, useRef } from "react";

const Intro = () => {

  const textRef = useRef();

  useEffect( () =>{
    init(textRef.current, { 
      showCursor: true, 
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Student', 'Freelance', 'Frontend Developer'] })
  },[])

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/farras.png" alt="foto" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Muhamad Farras</h1>
          {/* <h2>Web <span>Designing Enthusiast</span></h2> */}
          <h3>I'm a <span ref={textRef}></span></h3>
          <div className="button">
          <a href="https://drive.google.com/file/d/1uQVhuBjEcm0pzficaSQRe9Zg5AHpLP_f/view?usp=sharing" target="blank" className="btn stroke" download>
            Download CV&nbsp;
            <i className="fas fa-download"></i>
          </a>    
          </div>
        </div>
        <a href="#portfolio">
            <img src="assets/down.png" alt="down" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
