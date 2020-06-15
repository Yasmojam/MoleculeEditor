import React from "react";
import ToolButtons from "./ToolButtons";
import Vectors from "./assets/Vectors";
import ToolWindow from "./ToolWindow";

const RingStructWin = () => {
    return (
        <ToolWindow heading="Ring Structures">
            <ToolButtons>
                <img className="toolIcon" src={Vectors.benzene} alt=""/>
            </ToolButtons>
            <ToolButtons>
                <img className="toolIcon" src={Vectors.cyclohexane} alt=""/>
            </ToolButtons>
            <ToolButtons>
                <img className="toolIcon" src={Vectors.cyclopropane} alt=""/>
            </ToolButtons>
            <ToolButtons>
                <img className="toolIcon" src={Vectors.cyclobutane} alt=""/>
            </ToolButtons>
            <ToolButtons>
                <img className="toolIcon" src={Vectors.cyclooctane} alt=""/>
            </ToolButtons>
            <ToolButtons>
                <img className="toolIcon" src={Vectors.cyclopentane} alt=""/>
            </ToolButtons>
        </ToolWindow>
    )
}

export default RingStructWin;