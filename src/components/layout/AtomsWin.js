import React from "react";
import ToolButtons from "./ToolButtons";
import ToolWindow from "./ToolWindow";

const AtomsWin = () => {
    return (
        <ToolWindow heading="Atoms">
            <div className="toolWinContainer">
            <ToolButtons tool="H">
                <div>H</div>
            </ToolButtons>
            <ToolButtons tool="C">
                <div>C</div>
            </ToolButtons>
            <ToolButtons tool="O">
                <div>O</div>
            </ToolButtons>
            <ToolButtons tool="N">
                <div>N</div>
            </ToolButtons>
            <ToolButtons tool="P">
                <div>P</div>
            </ToolButtons>
            <ToolButtons tool="S">
                <div>S</div>
            </ToolButtons>
            <ToolButtons tool="F">
                <div>F</div>
            </ToolButtons>
            <ToolButtons tool="Cl">
                <div>Cl</div>
            </ToolButtons>
            <ToolButtons tool="Br">
                <div>Br</div>
            </ToolButtons>
            <ToolButtons tool="I">
                <div>I</div>
            </ToolButtons>
            <ToolButtons>
                <div>...</div>
            </ToolButtons>
            </div>
        </ToolWindow>
    )
}

export default AtomsWin;