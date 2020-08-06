import ToolWindow from "./ToolWindow";
import ToolButtons from "./ToolButtons";
import Vectors from "../assets/Vectors";
import React from "react";

const ChargeWin = () => {
    return (
        <ToolWindow heading="Charge">
            <div className="toolWinContainer">
            <ToolButtons tool="radical">
                <img className="toolIcon" src={Vectors.radical} alt=""/>
            </ToolButtons>
            <ToolButtons tool="minus">
                <img className="toolIcon" src={Vectors.minus} alt=""/>
            </ToolButtons>
            <ToolButtons tool="plus">
                <img className="toolIcon" src={Vectors.plus} alt=""/>
            </ToolButtons>
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
        </ToolWindow>
    )
}

export default ChargeWin;