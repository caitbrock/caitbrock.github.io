import React from 'react'
import UrbanDesignImage from '../../Urban Design.png'
import SoftwareEngineeringImage from '../../Software Engineering.png'
import "./Projects.css"

function Projects(props) {
  return (
    <div className="ProjectFrame">
      <div className="Architecture">
      <img className="UrbanDesign" src={UrbanDesignImage} />
      <h1>Design Portfolio</h1>
      <button onClick={() => {props.updateCurrentTabTo(5)}} style={{cursor: 'pointer'}}>View Work</button>

      </div>

      <div className="Computers">
      <img className="SoftwareEngineering" src={SoftwareEngineeringImage} />
      <h1>Software Engineering Portfolio</h1>

      <button onClick={() => {props.updateCurrentTabTo(4)}} style={{cursor: 'pointer'}}>View Work</button>
      </div>
    </div>

  )
}

export default Projects