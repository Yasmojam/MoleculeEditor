import React from "react";
import ToolButtons from "./ToolButtons";
import Vectors from "./assets/Vectors";
import ToolWindow from "./ToolWindow";

const RingStructWin = () => {
    return (
        <ToolWindow heading="Ring Structures">
            <ToolButtons tool="benzene">
                <img className="toolIcon" src={Vectors.benzene} alt=""/>
            </ToolButtons>
            <ToolButtons tool="cyclohexane">
                <img className="toolIcon" src={Vectors.cyclohexane} alt=""/>
            </ToolButtons>
            <ToolButtons tool="cyclopropane">
                <img className="toolIcon" src={Vectors.cyclopropane} alt=""/>
            </ToolButtons>
            <ToolButtons tool="cyclobutane">
                <img className="toolIcon" src={Vectors.cyclobutane} alt=""/>
            </ToolButtons>
            <ToolButtons tool="cyclooctane">
                <img className="toolIcon" src={Vectors.cyclooctane} alt=""/>
            </ToolButtons>
            <ToolButtons tool="cyclopentane">
                <img className="toolIcon" src={Vectors.cyclopentane} alt=""/>
            </ToolButtons>
        </ToolWindow>
    )
}

export default RingStructWin;