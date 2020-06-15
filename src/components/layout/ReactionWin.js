import React from "react";
import ToolWindow from "./ToolWindow";
import ToolButtons from "./ToolButtons";
import Vectors from "./assets/Vectors";

const ReactionWin = () => {
    return (
        <ToolWindow heading="Reaction Arrows">
            <ToolButtons>
                <img className="toolIcon" src={Vectors.reaction_arrow} alt=""/>
            </ToolButtons>
            <ToolButtons>
                <img className="toolIcon" src={Vectors.half_equilibrium} alt=""/>
            </ToolButtons>
            <ToolButtons>
                <img className="toolIcon" src={Vectors.equilibrium} alt=""/>
            </ToolButtons>
            <ToolButtons>
                <img className="toolIcon" src={Vectors.full_curly_arrow} alt=""/>
            </ToolButtons>
            <ToolButtons>
                <img className="toolIcon" src={Vectors.half_curly_arrow} alt=""/>
            </ToolButtons>
            <ToolButtons>
                <img className="toolIcon" src={Vectors.retro_arrow} alt=""/>
            </ToolButtons>
        </ToolWindow>
    )
}

export default ReactionWin;