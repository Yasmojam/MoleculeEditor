import ToolWindow from "./ToolWindow";
import ToolButtons from "./ToolButtons";
import Vectors from "./assets/Vectors";
import React from "react";

const ChargeWin = () => {
    return (
        <ToolWindow heading="Charge">
            <ToolButtons>
                <img className="toolIcon" src={Vectors.radical} alt=""/>
            </ToolButtons>
            <ToolButtons>
                <img className="toolIcon" src={Vectors.minus} alt=""/>
            </ToolButtons>
            <ToolButtons>
                <img className="toolIcon" src={Vectors.plus} alt=""/>
            </ToolButtons>
            <ToolButtons>
                <img className="toolIcon" src={Vectors.neg_dipole} alt=""/>
            </ToolButtons>
            <ToolButtons>
                <img className="toolIcon" src={Vectors.pos_dipole} alt=""/>
            </ToolButtons>
            <ToolButtons>
                <img className="toolIcon" src={Vectors.dipole} alt=""/>
            </ToolButtons>
        </ToolWindow>
    )
}

export default ChargeWin;