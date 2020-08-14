import React from "react";
import {useSelectedTool} from "./ToolContexProvider";
import Button from "react-bootstrap/Button";
import "./ToolButton.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

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
        <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">{props.toolTip}</Tooltip>}>
        <Button
                className="menuButton"
                variant="outline-secondary"
                tool={props.tool}
                onClick={() => {clickHandler(props.tool)}}>
            {props.children}
        </Button>
        </OverlayTrigger>
    )
}


export default ToolButton;