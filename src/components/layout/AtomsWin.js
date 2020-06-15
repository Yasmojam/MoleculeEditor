import React from "react";
import ToolButtons from "./ToolButtons";
import LongToolWindow from "./LongToolWindow";

const AtomsWin = () => {
    return (
        <LongToolWindow heading="Atoms">
            <ToolButtons>
                <text>H</text>
            </ToolButtons>
            <ToolButtons>
                <text>C</text>
            </ToolButtons>
            <ToolButtons>
                <text>O</text>
            </ToolButtons>
            <ToolButtons>
                <text>N</text>
            </ToolButtons>
            <ToolButtons>
                <text>P</text>
            </ToolButtons>
            <ToolButtons>
                <text>S</text>
            </ToolButtons>
            <ToolButtons>
                <text>F</text>
            </ToolButtons>
            <ToolButtons>
                <text>Cl</text>
            </ToolButtons>
            <ToolButtons>
                <text>B</text>
            </ToolButtons>
            <ToolButtons>
                <text>I</text>
            </ToolButtons>
            <ToolButtons>
                <text>...</text>
            </ToolButtons>

        </LongToolWindow>
    )
}

export default AtomsWin;