import React from "react";
import ToolWindow from "./ToolWindow";
import ToolButton from "./ToolButton";
import Vectors from "../assets/Vectors";

/**
 * Component which represents the reaction arrow menu
 * */
const ReactionWin = () => {
    return (
        <ToolWindow heading="Reaction Arrows">
            <div className="toolWinContainer">
            <ToolButton tool="reaction_arrow">
                <img className="toolIcon" src={Vectors.reaction_arrow} alt=""/>
            </ToolButton>
            <ToolButton tool="half_equilibrium">
                <img className="toolIcon" src={Vectors.half_equilibrium} alt=""/>
            </ToolButton>
            <ToolButton tool="equilibrium">
                <img className="toolIcon" src={Vectors.equilibrium} alt=""/>
            </ToolButton>
            <ToolButton tool="full_curly_arrow">
                <img className="toolIcon" src={Vectors.full_curly_arrow} alt=""/>
            </ToolButton>
            <ToolButton tool="half_curly_arrow">
                <img className="toolIcon" src={Vectors.half_curly_arrow} alt=""/>
            </ToolButton>
            <ToolButton tool="retro_arrow">
                <img className="toolIcon" src={Vectors.retro_arrow} alt=""/>
            </ToolButton>
            </div>
        </ToolWindow>
    )
}

export default ReactionWin;