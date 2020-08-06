import React from "react";
import {useSelectedTool} from "./ToolContexProvider";
import Button from "react-bootstrap/Button";
import "./ToolButton.css";

/**
 * Component which represents a tool menu button
 * */
const ToolButton = (props) => {
    const toolContext = useSelectedTool();

    const clickHandler = (tool) => {
        toolContext.setTool(tool);

        console.log("button clicked")
    }

    return (
        <Button
                className="menuButton"
                variant="outline-secondary"
                tool={props.tool}
                onClick={() => {clickHandler(props.tool)}}>
            {props.children}
        </Button>
    )
}


export default ToolButton;