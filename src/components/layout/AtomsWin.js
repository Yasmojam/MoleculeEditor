import React from "react";
import ToolButtons from "./ToolButtons";
import LongToolWindow from "./LongToolWindow";

const AtomsWin = () => {
    return (
        <LongToolWindow heading="Atoms">
            <ToolButtons>
                <div>H</div>
            </ToolButtons>
            <ToolButtons>
                <div>C</div>
            </ToolButtons>
            <ToolButtons>
                <div>O</div>
            </ToolButtons>
            <ToolButtons>
                <div>N</div>
            </ToolButtons>
            <ToolButtons>
                <div>P</div>
            </ToolButtons>
            <ToolButtons>
                <div>S</div>
            </ToolButtons>
            <ToolButtons>
                <div>F</div>
            </ToolButtons>
            <ToolButtons>
                <div>Cl</div>
            </ToolButtons>
            <ToolButtons>
                <div>B</div>
            </ToolButtons>
            <ToolButtons>
                <div>I</div>
            </ToolButtons>
            <ToolButtons>
                <div>...</div>
            </ToolButtons>

        </LongToolWindow>
    )
}

export default AtomsWin;