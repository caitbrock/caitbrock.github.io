import React from "react";
import "./NavBar.css";
import Logo from "../Logo/Logo";

function NavBar(props) {
  return (
    <div className="NavBar">
      <div className="Left">
      <div className='Logo' onClick={() => {props.updateCurrentTabTo(1)}}><Logo /></div>
      </div>
      <div className="Right">
            <div className='Icon' tabIndex="1" onClick={() => {props.updateCurrentTabTo(1)}}> Home</div>
            <div className='Icon' tabIndex="2" onClick={() => {props.updateCurrentTabTo(2)}}>Projects</div>
            <div className='Icon' tabIndex= "3" onClick={() => {props.updateCurrentTabTo(3)}}>Resume</div>
      </div>
    </div>
    
  );
}

export default NavBar;