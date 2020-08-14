import React from "react";
import ToolButton from "./ToolButton";
import ToolWindow from "./ToolWindow";
import UnavailableToolButton from "./UnavailableToolButton";

/**
 * Component which represents the atom and functional groups menu
 * */
const AtomsWin = () => {
    return (
        <ToolWindow heading="Atoms & FGs">
            <div className="toolWinContainer">
            <ToolButton tool="H" toolTip="Hydrogen">
                <div>H</div>
            </ToolButton>
            <ToolButton tool="C" toolTip="Carbon">
                <div>C</div>
            </ToolButton>
            <ToolButton tool="O" toolTip="Oxygen">
                <div>O</div>
            </ToolButton>
            <ToolButton tool="N" toolTip="Nitrogen">
                <div>N</div>
            </ToolButton>
            <ToolButton tool="P" toolTip="Phosphorus">
                <div>P</div>
            </ToolButton>
            <ToolButton tool="S" toolTip="Sulfur">
                <div>S</div>
            </ToolButton>
            <ToolButton tool="F" toolTip="Fluorine">
                <div>F</div>
            </ToolButton>
            <ToolButton tool="Cl" toolTip="Chlorine">
                <div>Cl</div>
            </ToolButton>
            <ToolButton tool="Br" toolTip="Bromine">
                <div>Br</div>
            </ToolButton>
            <ToolButton tool="I" toolTip="Iodine">
                <div>I</div>
            </ToolButton>
            <UnavailableToolButton tool="more atoms" toolTip="more atoms">
                <div style={{fontSize:"12px"}}>more atoms</div>
            </UnavailableToolButton>
            <UnavailableToolButton tool="functional groups" toolTip="functional groups">
                <div>FGs</div>
             </UnavailableToolButton>
            </div>
        </ToolWindow>
    )
}

export default AtomsWin;