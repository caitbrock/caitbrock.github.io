import React from 'react'
import "./SoftwareEngineering.css"
import Project1 from '../../Project1.png'
import Project2 from '../../Project2.png'
import Project3 from '../../Project3.png'
import Project4 from '../../Project4.png'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


function SoftwareEngineering(props) {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="ProjectBox">
      <div className ="ProjectContainer">
        <div className="Box2">
          <img className="Project2" src={Project2} />
          <div className='TextP2'>
          <h2>Our Growing City</h2>
          <p>Skills: HTML, CSS, Node, Express, Leaflet, QGIS</p>
          <h4>Application that tracks local development, allowing community members to engage with active applications within their neighbourhoods and keep track of upcoming public meetings.<br/>
          <br/><em>*Code is still being developed with North Toronto as the neighbourhood available for demo.*</em></h4><br/>
          </div>
            <div className='Buttons'>
            <button onClick={() => openInNewTab('https://our-growing-city.herokuapp.com/')} style={{cursor: 'pointer'}}>Demo the App</button>
            <button onClick={() => openInNewTab('https://github.com/caitbrock/Our-Growing-City')} style={{cursor: 'pointer'}}>View the Code</button>
            </div>
        </div>

        <div className="Box4">
          <img className="Project4" src={Project4} />
          <div className='TextP4'>
          <h2>Travelspo</h2>
          <p>Skills: HTML, CSS, Javascript, React, MongoDB, Express, and AWS S3</p>
          <h4>Travelspo is a social media platform that provides aspiring travellers with a location to save information related to travels.</h4><br/>
          </div>
          <div className='Buttons'>
        <button onClick={() => openInNewTab('https://github.com/caitbrock/Travelspo')} style={{cursor: 'pointer'}}>View the Code</button>
        </div>
        </div>

        <div className="Box1">
          <img className="Project1" src={Project1} />
          <div className='TextP1'>
          <h2>Sssoftware Engineering Skillsss</h2>
          <p>Skills: HTML, CSS, and Javascript</p>
          <h4>Recreating the game snake.</h4><br/>
          </div>
          <div className='Buttons'>
          <button onClick={() => openInNewTab('https://caitbrock.github.io/Ssssoftware-Engineering-Skillsss/')} style={{cursor: 'pointer'}}>Demo the App</button>
          <button onClick={() => openInNewTab('https://github.com/caitbrock/Ssssoftware-Engineering-Skillsss')} style={{cursor: 'pointer'}}>View the Code</button>
          </div>
        </div>

        <div className="Box3">
          <img className="Project3" src={Project3} />
          <div className='TextP3'>
          <h2>Megazon</h2>
          <p>Skills: HTML, CSS, Javascript, Django, PSQL, Materialize, Python</p>
          <h4>Metazon is an ecommerce application for digital products. This app is designed for a not too distant future where digital spaces and virtual environmments are part of our everyday lives.</h4><br/>
          </div>
          <div className='Buttons'>
          <button onClick={() => openInNewTab('https://metazon.herokuapp.com/')} style={{cursor: 'pointer'}}>Demo the App</button>
          <button onClick={() => openInNewTab('https://github.com/caitbrock/Megazon')} style={{cursor: 'pointer'}}>View the Code</button>
          </div>
        </div>
      </div>
    <div className="BottomButton">
      <button className="Back" onClick={() => {props.updateCurrentTabTo(2)}} style={{cursor: 'pointer'}}><KeyboardBackspaceIcon />Back to Projects</button>
      </div>
    </div>
  )
}

export default SoftwareEngineering