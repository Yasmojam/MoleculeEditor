import ToolWindow from "./ToolWindow";
import ToolButtons from "./ToolButtons";
import Vectors from "./assets/Vectors";
import React from "react";

const BondWin = () => {
    return (
        <ToolWindow heading="Bonds">
            <ToolButtons>
                <img className="toolIcon" src={Vectors.single} alt=""/>
            </ ToolButtons>
            <ToolButtons>
                <img className="toolIcon" src={Vectors.double} alt=""/>
            </ ToolButtons>
            <ToolButtons>
                <img className="toolIcon" src={Vectors.triple} alt=""/>
            </ ToolButtons>
            <ToolButtons>
                <img className="toolIcon" src={Vectors.quadruple} alt=""/>
            </ ToolButtons>
            <ToolButtons>
                <img className="toolIcon" src={Vectors.forward_plane} alt=""/>
            </ ToolButtons>
            <ToolButtons>
                <img className="toolIcon" src={Vectors.backward_plane} alt=""/>
            </ ToolButtons>
            <ToolButtons>
                <img className="toolIcon" src={Vectors.unspecified_plane} alt=""/>
            </ ToolButtons>
            <ToolButtons>
                <img className="toolIcon" src={Vectors.dative} alt=""/>
            </ ToolButtons>
            <ToolButtons>
                <img className="toolIcon" src={Vectors.intermediate} alt=""/>
            </ ToolButtons>
        </ToolWindow>
    )
}

export default BondWin;