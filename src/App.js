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
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CurrentToolIndicator from "./components/CurrentToolIndicator";


const App = () => {
    return (
        <ToolContextProvider>
            <div className='App'>
                <Container fluid>
                    <Row>
                    <Col className="headerCol" md={{span:12}}><Header/></Col>
                    </Row>
                    <Row>
                        <Col md={{order: 1}} className="drawablePanel">
                                <BondWin/>
                        </Col>
                        <Col md={{order: 2}} className="drawablePanel">
                                <RingStructWin/>
                        </Col>
                        <Col md={{order: 3}} className="drawablePanel">
                                <ChargeWin/>
                        </Col>
                        <Col md={{order: 4}} className="drawablePanel">
                                <ReactionWin/>
                        </Col>
                        <Col md={{order: 5}} className="drawablePanel">
                        <AtomsWin/>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{display:"flex", justifyContent:"center"}} xs= {{order:6}} md={{span: 12, order: 6}}>
                            <CurrentToolIndicator/>
                        </Col>
                    </Row>
                        <Row className="canvasRow">
                        <Col xs= {{order:8}} md={{span: 12, order: 8}}>
                                <div className="canvasArea">
                                    <DrawingArea />
                                </div>
                        </Col>
                        </Row>
                </Container>
                </div>
        </ToolContextProvider>
        )
}

export default App;