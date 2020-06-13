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
import Cyclopentane from "./assets/cyclopentane.png"
import Cyclooctane from "./assets/cyclooctane.png"
// Charges
import Radical from "./assets/radical.png"
import Minus from "./assets/minus.png"
import Plus from "./assets/plus.png"
import NegDipole from "./assets/neg dipole.png"
import PosDipole from "./assets/pos dipole.png"
import Dipole from "./assets/dipoleArrow.png"
// Reaction Arrows
import ReactionArrow from "./assets/reactionArrow.png"
import EquilibriumHalf from "./assets/eqilibrium.png"
import Equilibruim from "./assets/eqilibriumb56ca2df.png"
import FullCurlyArrow from "./assets/halfCurlyArrow631179fe.png"
import HalfCurlyArrow from "./assets/halfCurlyArrow.png"
import RetroArrow from "./assets/retroArrow.png"
import Canvas from "./components/Canvas";
import LongToolWindow from "./components/LongToolWindow";


class App extends Component {
    render() {
        return (
            <div className='App'>
                <div className='appContainer'>
                    <Header/>
                    <div className="workspace" style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <div className="allPanels">
                            <div className="panelContainer">
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
                            <div className="panelContainer">
                            <ToolWindow heading="Ring Structures">
                                <ToolButtons>
                                    <img className="toolIcon" src={Benzene} alt=""/>
                                </ToolButtons>
                                <ToolButtons>
                                    <img className="toolIcon" src={Cyclohexane} alt=""/>
                                </ToolButtons>
                                <ToolButtons>
                                    <img className="toolIcon" src={Cyclopropane} alt=""/>
                                </ToolButtons>
                                <ToolButtons>
                                    <img className="toolIcon" src={Cyclobutane} alt=""/>
                                </ToolButtons>
                                <ToolButtons>
                                    <img className="toolIcon" src={Cyclooctane} alt=""/>
                                </ToolButtons>
                                <ToolButtons>
                                    <img className="toolIcon" src={Cyclopentane} alt=""/>
                                </ToolButtons>

                            </ToolWindow>
                            </div>
                            <div className="panelContainer">
                            <ToolWindow heading="Charge">
                                <ToolButtons>
                                    <img className="toolIcon" src={Radical} alt=""/>
                                </ToolButtons>
                                <ToolButtons>
                                    <img className="toolIcon" src={Minus} alt=""/>
                                </ToolButtons>
                                <ToolButtons>
                                    <img className="toolIcon" src={Plus} alt=""/>
                                </ToolButtons>
                                <ToolButtons>
                                    <img className="toolIcon" src={NegDipole} alt=""/>
                                </ToolButtons>
                                <ToolButtons>
                                    <img className="toolIcon" src={PosDipole} alt=""/>
                                </ToolButtons>
                                <ToolButtons>
                                    <img className="toolIcon" src={Dipole} alt=""/>
                                </ToolButtons>
                            </ToolWindow>
                            </div>
                    <div className="panelContainer">
                            <ToolWindow heading="Reaction Arrows">
                                <ToolButtons>
                                    <img className="toolIcon" src={ReactionArrow} alt=""/>
                                </ToolButtons>
                                <ToolButtons>
                                    <img className="toolIcon" src={EquilibriumHalf} alt=""/>
                                </ToolButtons>
                                <ToolButtons>
                                    <img className="toolIcon" src={Equilibruim} alt=""/>
                                </ToolButtons>
                                <ToolButtons>
                                    <img className="toolIcon" src={FullCurlyArrow} alt=""/>
                                </ToolButtons>
                                <ToolButtons>
                                    <img className="toolIcon" src={HalfCurlyArrow} alt=""/>
                                </ToolButtons>
                                <ToolButtons>
                                    <img className="toolIcon" src={RetroArrow} alt=""/>
                                </ToolButtons>
                            </ToolWindow>
                        </div>
                    </div>
                        <div className="canvasAndBonds" style={{
                            display: "flex",
                            flex:"1",
                            position:"relative",
                            flexDirection: "column",
                            flexWrap: "wrap",
                            justifyContent: "space-around",
                            alignItems: "center"
                        }}>
                            <div className="canvasArea" style={{height:"auto", width:"auto", display:"flex"}}>
                            <Canvas/>
                            </div>
                            <div style={{position:"relative"}}>
                                <LongToolWindow heading="Atoms">
                                    <ToolButtons>
                                        <text>H</text>
                                    </ToolButtons>
                                    <ToolButtons>
                                        <text>C</text>
                                    </ToolButtons>
                                    <ToolButtons>
                                        <text>O</text>
                                    </ToolButtons>
                                    <ToolButtons>
                                        <text>N</text>
                                    </ToolButtons>
                                    <ToolButtons>
                                        <text>P</text>
                                    </ToolButtons>
                                    <ToolButtons>
                                        <text>S</text>
                                    </ToolButtons>
                                    <ToolButtons>
                                        <text>F</text>
                                    </ToolButtons>
                                    <ToolButtons>
                                        <text>Cl</text>
                                    </ToolButtons>
                                    <ToolButtons>
                                        <text>B</text>
                                    </ToolButtons>
                                    <ToolButtons>
                                        <text>I</text>
                                    </ToolButtons>
                                    <ToolButtons>
                                        <text>...</text>
                                    </ToolButtons>

                                </LongToolWindow>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;