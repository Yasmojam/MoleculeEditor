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


const App = () => {

    return (
        <ToolContextProvider>
            <div className='App'>
                <Container fluid>
                    <Row>
                    <Col className="headerCol" lg={{span:12}}><Header/></Col>
                    </Row>
                    <Row>
                        <Col lg={{order: 1}} className="drawablePanel">
                                <BondWin/>
                        </Col>
                        <Col lg={{order: 2}} className="drawablePanel">
                                <RingStructWin/>
                        </Col>
                        <Col lg={{order: 3}} className="drawablePanel">
                                <ChargeWin/>
                        </Col>
                        <Col lg={{order: 4}} className="drawablePanel">
                                <ReactionWin/>
                        </Col>
                        <Col lg={{order: 5}} className="drawablePanel">
                        <AtomsWin/>
                    </Col>
                    </Row>
                        <Row className="canvasRow">
                        <Col xs= {{order:6}} md={{span: 10, order: 6}}>
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