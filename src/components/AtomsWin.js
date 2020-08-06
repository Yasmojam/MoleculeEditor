import React from "react";
import ToolButton from "./ToolButton";
import ToolWindow from "./ToolWindow";

/**
 * Component which represents the atom and functional groups menu
 * */
const AtomsWin = () => {
    return (
        <ToolWindow heading="Atoms & FGs">
            <div className="toolWinContainer">
            <ToolButton tool="H">
                <div>H</div>
            </ToolButton>
            <ToolButton tool="C">
                <div>C</div>
            </ToolButton>
            <ToolButton tool="O">
                <div>O</div>
            </ToolButton>
            <ToolButton tool="N">
                <div>N</div>
            </ToolButton>
            <ToolButton tool="P">
                <div>P</div>
            </ToolButton>
            <ToolButton tool="S">
                <div>S</div>
            </ToolButton>
            <ToolButton tool="F">
                <div>F</div>
            </ToolButton>
            <ToolButton tool="Cl">
                <div>Cl</div>
            </ToolButton>
            <ToolButton tool="Br">
                <div>Br</div>
            </ToolButton>
            <ToolButton tool="I">
                <div>I</div>
            </ToolButton>
            <ToolButton tool="more atoms">
                <div style={{fontSize:"12px"}}>more atoms</div>
            </ToolButton>
            <ToolButton tool="functional groups">
                <div>FGs</div>
             </ToolButton>
            </div>
        </ToolWindow>
    )
}

export default AtomsWin;