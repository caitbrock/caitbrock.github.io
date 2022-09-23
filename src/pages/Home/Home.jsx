import React from "react";
import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import Main from "../../components/Main/Main";
import SoftwareEngineering from "../../components/SoftwareEngineering/SoftwareEngineering";
import Resume from "../../components/Resume/Resume";
import Projects from "../../components/Projects/Projects";
import UrbanDesign from "../../components/UrbanDesign/UrbanDesign";
// import Test from "../../components/Test/Test";

class Home extends React.Component {
    state = {
        currentTab: 1,
        show: 1,
    };

    updateCurrentTabTo = (tab) => {
        this.setState({ currentTab: tab });
        };
        
    render() {
        const tab = this.state.currentTab;
        let button;
        
        if (tab == 1) { button = (<Main 
            currentTab={this.state.currentTab} updateCurrentTabTo={this.updateCurrentTabTo}/>);
        } else if (tab == 2) {
            button = <Projects
            currentTab={this.state.currentTab} updateCurrentTabTo={this.updateCurrentTabTo}/>;
        } else if (tab == 3) {
            button = <Resume 
            currentTab={this.state.currentTab} updateCurrentTabTo={this.updateCurrentTabTo}/>;
        } else if (tab == 4) {
            button = <SoftwareEngineering
            currentTab={this.state.currentTab} updateCurrentTabTo={this.updateCurrentTabTo}/>
        } else { button = <UrbanDesign
            currentTab={this.state.currentTab} updateCurrentTabTo={this.updateCurrentTabTo}/> } 

    return (
        <div>
        <NavBar updateCurrentTabTo={this.updateCurrentTabTo} currentTab={this.state.currentTab}/>
        
        {button}
        </div>
    );
    }
}

export default Home;
