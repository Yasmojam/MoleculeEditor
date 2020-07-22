import React from "react";
import ToolWindow from "./ToolWindow";
import ToolButtons from "./ToolButtons";
import Vectors from "./assets/Vectors";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BondWin = () => {
    return (
        <ToolWindow heading="Bonds">
            <div className="toolWinContainer">
                <div className="buttonRow">
            <ToolButtons tool="single">
                <img className="toolIcon" src={Vectors.single} alt=""/>
            </ ToolButtons>
            <ToolButtons tool="double">
                <img className="toolIcon" src={Vectors.double} alt=""/>
            </ ToolButtons>
            <ToolButtons tool="triple">
                <img className="toolIcon" src={Vectors.triple} alt=""/>
            </ ToolButtons>
                </div>
                <div className="buttonRow">
            <ToolButtons tool="quadruple">
                <img className="toolIcon" src={Vectors.quadruple} alt=""/>
            </ ToolButtons>
            <ToolButtons tool="forward_plane">
                <img className="toolIcon" src={Vectors.forward_plane} alt=""/>
            </ ToolButtons>
            <ToolButtons tool="backward_plane">
                <img className="toolIcon" src={Vectors.backward_plane} alt=""/>
            </ ToolButtons>
                </div>
                <div className="buttonRow">
            <ToolButtons tool="unspecified_plane">
                <img className="toolIcon" src={Vectors.unspecified_plane} alt=""/>
            </ ToolButtons>
            <ToolButtons tool="dative">
                <img className="toolIcon" src={Vectors.dative} alt=""/>
            </ ToolButtons>
            <ToolButtons tool="intermediate">
                <img className="toolIcon" src={Vectors.intermediate} alt=""/>
            </ ToolButtons>
                </div>
            </div>
        </ToolWindow>

    )
}

export default BondWin;