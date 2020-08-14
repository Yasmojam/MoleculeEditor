import React from "react";
import ToolWindow from "./ToolWindow";
import Vectors from "../assets/Vectors";
import UnavailableToolButton from "./UnavailableToolButton";

/**
 * Component which represents the reaction arrow menu
 * */
const ReactionWin = () => {
    return (
        <ToolWindow heading="Reaction Arrows">
            <div className="toolWinContainer">
            <UnavailableToolButton tool="reaction_arrow" toolTip="reaction arrow">
                <img className="toolIcon" src={Vectors.reaction_arrow} alt=""/>
            </UnavailableToolButton>
            <UnavailableToolButton tool="half_equilibrium" toolTip="half equilibrium">
                <img className="toolIcon" src={Vectors.half_equilibrium} alt=""/>
            </UnavailableToolButton>
            <UnavailableToolButton tool="equilibrium" toolTip="equilibrium">
                <img className="toolIcon" src={Vectors.equilibrium} alt=""/>
            </UnavailableToolButton>
            <UnavailableToolButton tool="full_curly_arrow" toolTip="full curly arrow">
                <img className="toolIcon" src={Vectors.full_curly_arrow} alt=""/>
            </UnavailableToolButton>
            <UnavailableToolButton tool="half_curly_arrow" toolTip="half curly arrow">
                <img className="toolIcon" src={Vectors.half_curly_arrow} alt=""/>
            </UnavailableToolButton>
            <UnavailableToolButton tool="retro_arrow" toolTip="retro arrow">
                <img className="toolIcon" src={Vectors.retro_arrow} alt=""/>
            </UnavailableToolButton>
            </div>
        </ToolWindow>
    )
}

export default ReactionWin;