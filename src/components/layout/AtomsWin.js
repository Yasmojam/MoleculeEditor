import React from "react";
import ToolButtons from "./ToolButtons";
import LongToolWindow from "./LongToolWindow";
import ToolWindow from "./ToolWindow";

const AtomsWin = () => {
    return (
        <ToolWindow heading="Atoms">
            <div className="buttonRow">
            <ToolButtons tool="H">
                <div>H</div>
            </ToolButtons>
            <ToolButtons tool="C">
                <div>C</div>
            </ToolButtons>
            <ToolButtons tool="O">
                <div>O</div>
            </ToolButtons>
            </div>
            <div className="buttonRow">
            <ToolButtons tool="N">
                <div>N</div>
            </ToolButtons>
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
            <ToolButtons tool="B">
                <div>B</div>
            </ToolButtons>
            </div>
            <div className="buttonRow">
            <ToolButtons tool="I">
                <div>I</div>
            </ToolButtons>
            </div>
            <div className="buttonRow">
            <ToolButtons>
                <div>...</div>
            </ToolButtons>
            </div>

        </ToolWindow>
    )
}

export default AtomsWin;