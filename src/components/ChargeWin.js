import ToolWindow from "./ToolWindow";
import Vectors from "../assets/Vectors";
import React from "react";
import UnavailableToolButton from "./UnavailableToolButton";

/**
 * Component which represents the charge menu
 * */
const ChargeWin = () => {
    return (
        <ToolWindow heading="Charge">
            <div className="toolWinContainer">
            <UnavailableToolButton tool="radical" toolTip="radical">
                <img className="toolIcon" src={Vectors.radical} alt=""/>
            </UnavailableToolButton>
            <UnavailableToolButton tool="minus" toolTip="minus">
                <img className="toolIcon" src={Vectors.minus} alt=""/>
            </UnavailableToolButton>
            <UnavailableToolButton tool="plus" toolTip="plus">
                <img className="toolIcon" src={Vectors.plus} alt=""/>
            </UnavailableToolButton>
            <UnavailableToolButton tool="neg_dipole" toolTip="negative dipole">
                <img className="toolIcon" src={Vectors.neg_dipole} alt=""/>
            </UnavailableToolButton>
            <UnavailableToolButton tool="pos_dipole" toolTip="positive dipole">
                <img className="toolIcon" src={Vectors.pos_dipole} alt=""/>
            </UnavailableToolButton>
            <UnavailableToolButton tool="dipole" toolTip="dipole">
                <img className="toolIcon" src={Vectors.dipole} alt=""/>
            </UnavailableToolButton>
            </div>
        </ToolWindow>
    )
}


export default ChargeWin;