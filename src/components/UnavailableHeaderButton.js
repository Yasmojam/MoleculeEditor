import React from "react";
import Button from "react-bootstrap/Button";
import "./HeaderButton.css"
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

/**
 * Component which represents a header button which is unavailable
 * */
const UnavailableHeaderButton = (props) => {
    return (
        <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">unavailable</Tooltip>}>
            <Button
                disabled
                className="headerButton"
                variant="outline-secondary">
                {props.children}
            </Button>
        </OverlayTrigger>
    )
}

export default UnavailableHeaderButton;