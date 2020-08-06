import React from "react";
import ToolWindow from "./ToolWindow";
import ToolButtons from "./ToolButtons";
import Vectors from "../assets/Vectors";

const ReactionWin = () => {
    return (
        <ToolWindow heading="Reaction Arrows">
            <div className="toolWinContainer">
            <ToolButtons tool="reaction_arrow">
                <img className="toolIcon" src={Vectors.reaction_arrow} alt=""/>
            </ToolButtons>
            <ToolButtons tool="half_equilibrium">
                <img className="toolIcon" src={Vectors.half_equilibrium} alt=""/>
            </ToolButtons>
            <ToolButtons tool="equilibrium">
                <img className="toolIcon" src={Vectors.equilibrium} alt=""/>
            </ToolButtons>
            <ToolButtons tool="full_curly_arrow">
                <img className="toolIcon" src={Vectors.full_curly_arrow} alt=""/>
            </ToolButtons>
            <ToolButtons tool="half_curly_arrow">
                <img className="toolIcon" src={Vectors.half_curly_arrow} alt=""/>
            </ToolButtons>
            <ToolButtons tool="retro_arrow">
                <img className="toolIcon" src={Vectors.retro_arrow} alt=""/>
            </ToolButtons>
            </div>
        </ToolWindow>
    )
}

export default ReactionWin;