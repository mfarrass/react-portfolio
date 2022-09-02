import React from 'react'
import "./about.scss"

const About = () => {

  const data = [
    {
      id: 1,
      name: "Technical Skills",
      title: "Tools Design",
      img:
        "https://thenextscoop.com/wp-content/uploads/2018/04/5-Graphic-Design-Rules-Every-Designers-Must-to-Know-1280x720.png",
      icon: "assets/icon-design.png",
      desc:
        "Figma, Adobe Illustrator, Adobe Photoshop, Canva.",
    },
    {
      id: 2,
      name: "Muhamad Farras",
      title: "Student at Universitas Nasional",
      img:
        "assets/farras-himasi-crop.jpg",
      icon: "assets/profile-aboutme.png",
      desc:
        "I am an Information Systems student at the Universitas Nasional. I enjoy solving problems and implementing ideas by design. Interested in exploring different design styles and following design trends. I am a junior programmer with good knowledge of front-end techniques. I like structure and order and I also support quality. I like spending time fixing small details and optimizing web applications. I also like working in a team, you will learn faster and more. As the saying goes: 'two heads are better than one'. ",
      featured: true,
    },
    {
      id: 3,
      name: "Technical Skills",
      title: "Web Technology",
      img:
        "data:image/png;base64,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",
      icon: "assets/icon-web.png",
      desc:
        "HTML, CSS, SASS, Javascript, React, Tailwind, Bootstrap. ",
    },
  ];

  return (
    <div className='about' id='about'>
        <h1>About me</h1>
        <div className="container">
            {data.map( d => (
            <div className={d.featured ? "card featured" : "card"}>
                <div className="top">
                    <img 
                    className='left'
                    src="assets/right-arrow.png" 
                    alt="right-arrow" />
                    <img 
                    className='user'
                    src={d.img} 
                    alt="" />
                    <img 
                    className='right'
                    src={d.icon} 
                    alt="" />
                </div>
                <div className="center">
                  {d.desc}
                </div>
                <div className="bottom">
                    <h3>{d.name}</h3>
                    <h4>{d.title}</h4>
                </div>
            </div>
              ))}
        </div>
    </div>
  )
}

export default About