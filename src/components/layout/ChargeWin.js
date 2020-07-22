import ToolWindow from "./ToolWindow";
import ToolButtons from "./ToolButtons";
import Vectors from "./assets/Vectors";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ChargeWin = () => {
    return (
        <ToolWindow heading="Charge">
            <div className="toolWinContainer">
                <div className="buttonRow">
            <ToolButtons tool="radical">
                <img className="toolIcon" src={Vectors.radical} alt=""/>
            </ToolButtons>
            <ToolButtons tool="minus">
                <img className="toolIcon" src={Vectors.minus} alt=""/>
            </ToolButtons>
            <ToolButtons tool="plus">
                <img className="toolIcon" src={Vectors.plus} alt=""/>
            </ToolButtons>
                </div>
                <div className="buttonRow">
            <ToolButtons tool="neg_dipole">
                <img className="toolIcon" src={Vectors.neg_dipole} alt=""/>
            </ToolButtons>
            <ToolButtons tool="pos_dipole">
                <img className="toolIcon" src={Vectors.pos_dipole} alt=""/>
            </ToolButtons>
            <ToolButtons tool="dipole">
                <img className="toolIcon" src={Vectors.dipole} alt=""/>
            </ToolButtons>
                </div>
            </div>
        </ToolWindow>
    )
}

export default ChargeWin;