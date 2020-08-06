import React from "react";
import {useSelectedTool} from "./ToolContexProvider";
import Button from "react-bootstrap/Button";

const HeaderButton = (props) => {
    const toolContext = useSelectedTool();

    const clickHandler = (tool) => {
        toolContext.setTool(tool);

        console.log("button clicked")
    }

    return (
        <Button variant="outline-secondary"
                tool={props.tool}
                style={headerButtonStyle}
                onClick={() => {clickHandler(props.tool)}}>
            {props.children}
        </Button>
        )
}


export const headerButtonStyle = {
    display: "flex",
    height: "38px",
    fontSize: "15px",
    textAlign: "center",
    padding: "10px",
    margin: "0.1rem",
    float: "right",
    position: "relative",
    border:"1px solid #707070",

    justifyContent: "space-between",
    alignItems: "center"
}

export default HeaderButton;