import React from "react";
import {useSelectedTool} from "./ToolContexProvider";

/**
 * Component which represents the selected tool indicator
 * */
const CurrentToolIndicator = () => {
    const selectedTool = useSelectedTool().tool;

    const renameToolForDisplay = (tool: String) => {
        switch(tool){
            case "Default tool":
                return "none";
            case "half_curly":
                return "Half curly arrow";
            case "equilibrium":
                return "equilibrium arrow";
            case "half_equilibrium":
                return "half equilibrium arrow";
            case "full_curly_arrow":
                return "full curly arrow";
            case "half_curly_arrow":
                return "half curly arrow";
            case "retro_arrow":
                return "retro arrow";
            case "single":
                return tool + " bond"
            case "double":
                return tool + " bond"
            case "triple":
                return tool + " bond"
            case "quadruple":
                return tool + " bond"
            case "dative":
                return tool + " bond"
            case "intermediate":
                return "intermediate bond";
            case "dipole":
                return "dipole arrow"
            case "neg_dipole":
                return "negative delta";
            case "pos_dipole":
            return "positive delta";
            case "backward_plane":
            return "backward plane bond";
            case "forward_plane":
            return "forward plane bond";
            case "unspecified_plane":
                return "unspecified plane bond";
            case "pos_delta":
                return "positive delta";
            case "reaction_arrow":
                return "forward reaction arrow"
            case "T":
                return "text"
            default:
                return tool;
        }
    }
    return (
        <div className="currentTool" style={{width:"750px", background: "white", border: "2px #707070 solid", borderRadius:"0.25rem", display: "flex", justifyContent: "center"}}>
            <div>Current Tool:&nbsp;</div>
            <div>{renameToolForDisplay(selectedTool)}</div>
        </div>
    )
}
export default CurrentToolIndicator;