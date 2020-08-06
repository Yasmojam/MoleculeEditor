import React from "react";
import ToolWindow from "./ToolWindow";
import ToolButton from "./ToolButton";
import Vectors from "../assets/Vectors";

/**
 * Component which represents the bond menu
 * */
const BondWin = () => {
    return (
        <ToolWindow heading="Bonds">
            <div className="toolWinContainer">
            <ToolButton tool="single">
                <img className="toolIcon" src={Vectors.single} alt=""/>
            </ToolButton>
            <ToolButton tool="double">
                <img className="toolIcon" src={Vectors.double} alt=""/>
            </ToolButton>
            <ToolButton tool="triple">
                <img className="toolIcon" src={Vectors.triple} alt=""/>
            </ToolButton>
            <ToolButton tool="quadruple">
                <img className="toolIcon" src={Vectors.quadruple} alt=""/>
            </ToolButton>
            <ToolButton tool="forward_plane">
                <img className="toolIcon" src={Vectors.forward_plane} alt=""/>
            </ToolButton>
            <ToolButton tool="backward_plane">
                <img className="toolIcon" src={Vectors.backward_plane} alt=""/>
            </ToolButton>
            <ToolButton tool="unspecified_plane">
                <img className="toolIcon" src={Vectors.unspecified_plane} alt=""/>
            </ToolButton>
            <ToolButton tool="dative">
                <img className="toolIcon" src={Vectors.dative} alt=""/>
            </ToolButton>
            <ToolButton tool="intermediate">
                <img className="toolIcon" src={Vectors.intermediate} alt=""/>
            </ToolButton>
            </div>
        </ToolWindow>

    )
}

export default BondWin;