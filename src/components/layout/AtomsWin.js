import React from "react";
import ToolButtons from "./ToolButtons";
import ToolWindow from "./ToolWindow";

const AtomsWin = () => {
    return (
        <ToolWindow heading="Atoms">
            <div className="toolWinContainer">
            <div className="buttonRow">
            <ToolButtons tool="H">
                <div>H</div>
            </ToolButtons>
            <ToolButtons tool="C">
                <div>C</div>
            </ToolButtons>
            </div>
            <div className="buttonRow">
            <ToolButtons tool="O">
                <div>O</div>
            </ToolButtons>
            <ToolButtons tool="N">
                <div>N</div>
            </ToolButtons>
            </div>
            <div className="buttonRow">
            <ToolButtons tool="P">
                <div>P</div>
            </ToolButtons>
            <ToolButtons tool="S">
                <div>S</div>
            </ToolButtons>
            </div>
            <div className="buttonRow">
            <ToolButtons tool="F">
                <div>F</div>
            </ToolButtons>
            <ToolButtons tool="Cl">
                <div>Cl</div>
            </ToolButtons>
            </div>
            <div className="buttonRow">
            <ToolButtons tool="B">
                <div>B</div>
            </ToolButtons>
            <ToolButtons tool="I">
                <div>I</div>
            </ToolButtons>
            </div>
            <div className="buttonRow">
            <ToolButtons>
                <div>...</div>
            </ToolButtons>
            </div>
            </div>
        </ToolWindow>
    )
}

export default AtomsWin;