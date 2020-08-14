import React from "react";
import ToolWindow from "./ToolWindow";
import ToolButton from "./ToolButton";
import Vectors from "../assets/Vectors";
import UnavailableToolButton from "./UnavailableToolButton";

/**
 * Component which represents the bond menu
 * */
const BondWin = () => {
    return (
        <ToolWindow heading="Bonds">
            <div className="toolWinContainer">
            <ToolButton tool="single" toolTip="single">
                <img className="toolIcon" src={Vectors.single} alt=""/>
            </ToolButton>
            <ToolButton tool="double" toolTip="double">
                <img className="toolIcon" src={Vectors.double} alt=""/>
            </ToolButton>
            <ToolButton tool="triple" toolTip="triple">
                <img className="toolIcon" src={Vectors.triple} alt=""/>
            </ToolButton>
            <ToolButton tool="quadruple" toolTip="quadruple">
                <img className="toolIcon" src={Vectors.quadruple} alt=""/>
            </ToolButton>
            <ToolButton tool="forward_plane" toolTip="forward plane">
                <img className="toolIcon" src={Vectors.forward_plane} alt=""/>
            </ToolButton>
            <ToolButton tool="backward_plane" toolTip="backward plane">
                <img className="toolIcon" src={Vectors.backward_plane} alt=""/>
            </ToolButton>
            <UnavailableToolButton tool="unspecified_plane" toolTip="unspecified plane">
                <img className="toolIcon" src={Vectors.unspecified_plane} alt=""/>
            </UnavailableToolButton>
            <UnavailableToolButton tool="dative" toolTip="dative">
                <img className="toolIcon" src={Vectors.dative} alt=""/>
            </UnavailableToolButton>
            <ToolButton tool="intermediate" toolTip="intermediate">
                <img className="toolIcon" src={Vectors.intermediate} alt=""/>
            </ToolButton>
            </div>
        </ToolWindow>

    )
}

export default BondWin;