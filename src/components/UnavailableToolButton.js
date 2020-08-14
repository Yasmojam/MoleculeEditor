import React from "react";
import Button from "react-bootstrap/Button";
import "./ToolButton.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

/**
 * Component which represents a tool menu button which is unavailable
 * */
const UnavailableToolButton = (props) => {
    return (
        <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">unavailable</Tooltip>}>
            <Button
                className="menuButton"
                disabled
                variant="outline-secondary">
                {props.children}
            </Button>
        </OverlayTrigger>
    )
}


export default UnavailableToolButton;