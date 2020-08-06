import ToolWindow from "./ToolWindow";
import ToolButton from "./ToolButton";
import Vectors from "../assets/Vectors";
import React from "react";

/**
 * Component which represents the charge menu
 * */
const ChargeWin = () => {
    return (
        <ToolWindow heading="Charge">
            <div className="toolWinContainer">
            <ToolButton tool="radical">
                <img className="toolIcon" src={Vectors.radical} alt=""/>
            </ToolButton>
            <ToolButton tool="minus">
                <img className="toolIcon" src={Vectors.minus} alt=""/>
            </ToolButton>
            <ToolButton tool="plus">
                <img className="toolIcon" src={Vectors.plus} alt=""/>
            </ToolButton>
            <ToolButton tool="neg_dipole">
                <img className="toolIcon" src={Vectors.neg_dipole} alt=""/>
            </ToolButton>
            <ToolButton tool="pos_dipole">
                <img className="toolIcon" src={Vectors.pos_dipole} alt=""/>
            </ToolButton>
            <ToolButton tool="dipole">
                <img className="toolIcon" src={Vectors.dipole} alt=""/>
            </ToolButton>
            </div>
        </ToolWindow>
    )
}

export default ChargeWin;