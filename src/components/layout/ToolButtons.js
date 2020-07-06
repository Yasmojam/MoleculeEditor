import React, {useRef, useEffect} from "react";
import {useSelectedTool} from "../ToolContexProvider";

const ToolButtons = (props) => {
    const toolContext = useSelectedTool();

    const clickHandler = (tool) => {
        toolContext.setTool(tool);

        console.log("button clicked")
    }

    //DEBUGGING
    // useEffect(() =>{
    //     console.log("selected tool:" + toolContext.tool);
    //     },[toolContext.tool]
    // )

    return (
        <button className="ui icon button" tool={props.tool} style={{width: "50px", height: "50px"}} onClick={() => {clickHandler(props.tool)}}>
            {props.children}
        </button>
    )
}


export default ToolButtons;