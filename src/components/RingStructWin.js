import React from "react";
import ToolButton from "./ToolButton";
import Vectors from "../assets/Vectors";
import ToolWindow from "./ToolWindow";

/**
 * Component which represents ring structure menu
 * */
const RingStructWin = () => {
    return (
        <ToolWindow heading="Ring Structures">
            <div className="toolWinContainer">
            <ToolButton tool="benzene">
                <img className="toolIcon" src={Vectors.benzene} alt=""/>
            </ToolButton>
            <ToolButton tool="cyclohexane">
                <img className="toolIcon" src={Vectors.cyclohexane} alt=""/>
            </ToolButton>
            <ToolButton tool="cyclopropane">
                <img className="toolIcon" src={Vectors.cyclopropane} alt=""/>
            </ToolButton>
            <ToolButton tool="cyclobutane">
                <img className="toolIcon" src={Vectors.cyclobutane} alt=""/>
            </ToolButton>
            <ToolButton tool="cyclooctane">
                <img className="toolIcon" src={Vectors.cyclooctane} alt=""/>
            </ToolButton>
            <ToolButton tool="cyclopentane">
                <img className="toolIcon" src={Vectors.cyclopentane} alt=""/>
            </ToolButton>
                </div>
        </ToolWindow>
    )
}

export default RingStructWin;