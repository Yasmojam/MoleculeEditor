import React, {useEffect} from "react";
import {useSelectedTool} from "../ToolContexProvider";

const HeaderButton = (props) => {
    const toolContext = useSelectedTool();

    const clickHandler = (tool) => {
        toolContext.setTool(tool);

        console.log("button clicked")
    }

    useEffect(() => {
            console.log("selected tool:" + toolContext.tool);
        }, [toolContext.tool]
    )

    return (
        <button className="ui icon button" tool={props.tool} style={headerButtonStyle} onClick={() => {
            clickHandler(props.tool)
        }}>
            {props.children}
        </button>
    )
}


export const headerButtonStyle = {
    display: "flex",
    height: "38px",
    fontSize: "15px",
    textAlign: "center",
    padding: "10px",
    margin: "2px",
    float: "right",
    position: "relative",

    justifyContent: "space-between",
    alignItems: "center"
}

export default HeaderButton;