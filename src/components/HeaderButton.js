import React from "react";
import {useSelectedTool} from "./ToolContexProvider";
import Button from "react-bootstrap/Button";
import "./HeaderButton.css"
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

/**
 * Component which represents a header button
 * */
const HeaderButton = (props) => {
    const toolContext = useSelectedTool();

    const clickHandler = (tool) => {
        toolContext.setTool(tool);

        console.log("button clicked")
    }

    return (
        <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">{props.toolTip}</Tooltip>}>
        <Button className="headerButton" variant="outline-secondary"
                tool={props.tool}
                // style={headerButtonStyle}
                onClick={() => {clickHandler(props.tool)}}>
            {props.children}
        </Button>
        </OverlayTrigger>
        )
}

export default HeaderButton;