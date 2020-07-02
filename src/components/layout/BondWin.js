import React, {useState} from "react";
import ToolWindow from "./ToolWindow";
import ToolButtons from "./ToolButtons";
import Vectors from "./assets/Vectors";
import {useSelectedTool} from "../ToolContexProvider";


const BondWin = () => {
    // const [selectedTool, setSelectedTool] = useState("");
    //
    // const onButtonClick = (event) => {
    //     const toolName=event.currentTarget.dataset.tool
    //     setSelectedTool(toolName);
    //
    //     console.log(selectedTool);
    // }




    return (
        <ToolWindow heading="Bonds">
            <ToolButtons tool="single">
                <img className="toolIcon" src={Vectors.single} alt=""/>
            </ ToolButtons>
            <ToolButtons tool="double" >
                <img className="toolIcon" src={Vectors.double} alt=""/>
            </ ToolButtons>
            <ToolButtons tool="triple" >
                <img className="toolIcon" src={Vectors.triple} alt=""/>
            </ ToolButtons>
            <ToolButtons tool="quadruple" >
                <img className="toolIcon" src={Vectors.quadruple} alt=""/>
            </ ToolButtons>
            <ToolButtons tool="forward_plane" >
                <img className="toolIcon" src={Vectors.forward_plane} alt=""/>
            </ ToolButtons>
            <ToolButtons tool="backward_plane" >
                <img className="toolIcon" src={Vectors.backward_plane} alt=""/>
            </ ToolButtons>
            <ToolButtons tool="unspecified_plane" >
                <img className="toolIcon" src={Vectors.unspecified_plane} alt=""/>
            </ ToolButtons>
            <ToolButtons tool="dative" >
                <img className="toolIcon" src={Vectors.dative} alt=""/>
            </ ToolButtons>
            <ToolButtons tool="intermediate">
                <img className="toolIcon" src={Vectors.intermediate} alt=""/>
            </ ToolButtons>
        </ToolWindow>
    )
}

export default BondWin;