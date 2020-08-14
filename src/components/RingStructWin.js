import React from "react";
import Vectors from "../assets/Vectors";
import ToolWindow from "./ToolWindow";
import UnavailableToolButton from "./UnavailableToolButton";

/**
 * Component which represents ring structure menu
 * */
const RingStructWin = () => {
    return (
        <ToolWindow heading="Ring Structures">
            <div className="toolWinContainer">
            <UnavailableToolButton tool="benzene" toolTip="benzene">
                <img className="toolIcon" src={Vectors.benzene} alt=""/>
            </UnavailableToolButton>
            <UnavailableToolButton tool="cyclohexane" toolTip="cyclohexane">
                <img className="toolIcon" src={Vectors.cyclohexane} alt=""/>
            </UnavailableToolButton>
            <UnavailableToolButton tool="cyclopropane" toolTip="cyclopropane">
                <img className="toolIcon" src={Vectors.cyclopropane} alt=""/>
            </UnavailableToolButton>
            <UnavailableToolButton tool="cyclobutane" toolTip="cyclobutane">
                <img className="toolIcon" src={Vectors.cyclobutane} alt=""/>
            </UnavailableToolButton>
            <UnavailableToolButton tool="cyclooctane" toolTip="cyclooctane">
                <img className="toolIcon" src={Vectors.cyclooctane} alt=""/>
            </UnavailableToolButton>
            <UnavailableToolButton tool="cyclopentane" toolTip="cyclopentane">
                <img className="toolIcon" src={Vectors.cyclopentane} alt=""/>
            </UnavailableToolButton>
                </div>
        </ToolWindow>
    )
}

export default RingStructWin;