import React, {Component} from 'react';
import Header from "./components/layout/Header";
import './App.css';
import DrawingArea from "./components/layout/DrawingArea";
import RingStructWin from "./components/layout/RingStructWin";
import ReactionWin from "./components/layout/ReactionWin";
import BondWin from "./components/layout/BondWin";
import ChargeWin from "./components/layout/ChargeWin";
import AtomsWin from "./components/layout/AtomsWin";


class App extends Component {
    render() {
        return (
            <div className='App'>
                <div className='appContainer'>
                    <Header/>
                    <div className="workspace">
                        <div className="allPanels">
                            <div className="panelContainer">
                                <BondWin/>
                            </div>
                            <div className="panelContainer">
                                <RingStructWin/>
                            </div>
                            <div className="panelContainer">
                                <ChargeWin/>
                            </div>
                            <div className="panelContainer">
                                <ReactionWin/>
                            </div>
                        </div>
                        <div className="canvasAndBonds">
                            <div className="canvasArea">
                                <DrawingArea/>
                            </div>
                            <div className="atomWinContainer">
                                <AtomsWin/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;