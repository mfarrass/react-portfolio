import React from 'react'
import { useState } from 'react';
import "./works.scss"

const Works = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "./assets/web-icon.png",
      title: "Second Hand",
      desc:
        "This website is my Final Project while attending a course at Binar Academy x Kampus Merdeka. ",
      img:
        "./assets/final-project.png",
      project: 
        "https://finalproject-fejs2.vercel.app/",
    },
    {
      id: "2",
      icon: "./assets/web-icon.png",
      title: "Wisata Hambalang",
      desc:
        "This website was created to display information about tourism in the village of Hambalang.",
      img:
        "./assets/wisata-hambalang.png",
      project: 
        "https://wisatahambalang.com/",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      project: 
        "#",
    },
  ];
  
  const handleClick = (way) => {
    way === "left" 
    ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
    : setCurrentSlide(currentSlide < data.length - 1 ?currentSlide+1 : 0);
  };

  return (
    <div className='works' id='works'>
        <div 
        className="slider" 
        style={{transform: `translateX(-${currentSlide *100}vw)` }}
        >
              {data.map((d) => (
                <div className="container">
                  <div className="item">
                      <div className="left">
                          <div className="leftContainer">
                              <div className="imgContainer">
                                  <img src={d.icon} alt="mobile" />
                              </div>
                              <h2>{d.title}</h2>
                              <p>{d.desc}</p>
                              <a href={d.project}>
                              <span>See Project</span>
                              </a>
                          </div>
                      </div>
                      <div className="right">
                      <img src={d.img} alt="right" />
                      </div>
                  </div>
              </div>))}
        </div>
        <img src="assets/arrow.png" className='arrow left' alt="arrow-left" onClick={() => handleClick("left")}/>
        <img src="assets/arrow.png" className='arrow right' alt="arrow-right" onClick={() => handleClick()} />
    </div>
  )
}

export default Works