import React from 'react';
import Header from "./components/layout/Header";
import './App.css';
import DrawingArea from "./components/layout/DrawingArea";
import RingStructWin from "./components/layout/RingStructWin";
import ReactionWin from "./components/layout/ReactionWin";
import BondWin from "./components/layout/BondWin";
import ChargeWin from "./components/layout/ChargeWin";
import AtomsWin from "./components/layout/AtomsWin";
import {ToolContextProvider} from "./components/ToolContexProvider";


const App = () => {

    return (
        <ToolContextProvider>
            <div className='App'>
                <div className="wrapper">
                    <header><Header/></header>
                        <aside className="leftPanels">
                                <BondWin/>
                                <RingStructWin/>
                                <ChargeWin/>
                                <ReactionWin/>
                        </aside>
                        <aside className="rightPanel">
                            <div className="atomWinContainer">
                                <AtomsWin/>
                            </div>
                        </aside>
                        <main>
                            <div className="canvasArea">
                                <DrawingArea />
                            </div>
                        </main>
                </div>
                </div>
        </ToolContextProvider>
        )
}

export default App;