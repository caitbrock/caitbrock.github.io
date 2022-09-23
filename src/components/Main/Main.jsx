import React from 'react'
import "./Main.css"
import Graphic from "../../Graphic-Compressed.png";
import logo2 from '../../CaitBrock-02.png'

function Main() {
  return (
    <div className="Box">
      {/* <img className="Avatar" src={Image} /> */}
      <img className="Avatar" src={Graphic} />
      <div className="Text">
    <div className="Text-Intro">
    <h2 >My name is </h2> <img className="Logo2" src={logo2} /> <br/>
    </div>
    <div className="Text-Description">
    I am a Frontend Developer and Designer based in Toronto. I am <em>interested in the design of physical and digital spaces.</em> 
    
    <br/><br/>I started my education and career in Architecture and have worked as a Graphic Designer, Project Planner, and Urban Designer. With an interest in data, technology, and the future of design, I decided to enroll in a Software Engineering program to further 
    develop my technical skills. The core skills required in both industries are quite similiar

    <br/><br/> The project tab of this website includes some examples of work within both industries. A portfolio with further examples is available upon request. 
    
    <br/><br/> Please feel free to contact me at cait2brock@gmail.com.
    </div>
    </div>
    </div>
  )
}

export default Main