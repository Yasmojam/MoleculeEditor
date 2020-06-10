import React, {Component} from 'react';
import Header from "./components/layout/Header";
import './App.css';
import ToolWindow from "./components/ToolWindow";
import ToolButtons from "./components/layout/ToolButtons";

// Images
// Bonds
import Single from "./assets/single.png";
import Double from "./assets/double bond.png"
import Triple from "./assets/triple bond.png"
import Quadruple from "./assets/quadruple bond.png"
import ForwardPlane from "./assets/forward.png"
import BackwardPlane from "./assets/backward.png"
import UnspecifiedPlane from "./assets/planeNotSpecified.png"
import Dative from "./assets/dative.png"
import Intermediate from "./assets/intermediate.png"
// Ring Strictures
import Benzene from "./assets/benzene31dcf2c1.png"
import Cyclohexane from "./assets/cyclohexane.png"
import Cyclobutane from "./assets/cyclobutane.png"
import Cyclopropane from "./assets/cyclopropane.png"

class App extends Component {
    render() {
        return (
            <div className='App'>
                <div className='container'>
                    <Header/>
                    <div className="toolWinContainer">
                        <ToolWindow heading="Bonds">
                            <ToolButtons>
                                <img className="toolIcon" src={Single} alt=""/>
                            </ ToolButtons>
                            <ToolButtons>
                                <img className="toolIcon" src={Double} alt=""/>
                            </ ToolButtons>
                            <ToolButtons>
                                <img className="toolIcon" src={Triple} alt=""/>
                            </ ToolButtons>
                            <ToolButtons>
                                <img className="toolIcon" src={Quadruple} alt=""/>
                            </ ToolButtons>
                            <ToolButtons>
                                <img className="toolIcon" src={ForwardPlane} alt=""/>
                            </ ToolButtons>
                            <ToolButtons>
                                <img className="toolIcon" src={BackwardPlane} alt=""/>
                            </ ToolButtons>
                            <ToolButtons>
                                <img className="toolIcon" src={UnspecifiedPlane} alt=""/>
                            </ ToolButtons>
                            <ToolButtons>
                                <img className="toolIcon" src={Dative} alt=""/>
                            </ ToolButtons>
                            <ToolButtons>
                                <img className="toolIcon" src={Intermediate} alt=""/>
                            </ ToolButtons>
                        </ToolWindow>
                    </div>
                    <div className="toolWinContainer">
                        <ToolWindow heading="Ring Structures">
                            <ToolButtons>
                                <img className="toolIcon" src={Benzene} alt=""/>
                            </ToolButtons>
                            <ToolButtons>
                                <img className="toolIcon" src={Benzene} alt=""/>
                            </ToolButtons>
                            <ToolButtons>
                                <img className="toolIcon" src={Benzene} alt=""/>
                            </ToolButtons>
                            <ToolButtons>
                                <img className="toolIcon" src={Benzene} alt=""/>
                            </ToolButtons>
                            <ToolButtons>
                                <img className="toolIcon" src={Benzene} alt=""/>
                            </ToolButtons>
                            <ToolButtons>
                                <img className="toolIcon" src={Benzene} alt=""/>
                            </ToolButtons>
                        </ToolWindow>
                    </div>
                </div>
            </div>
        )
    }
}

const iconStyle = {
    width: "25px",
    height: "25px"
}

export default App;