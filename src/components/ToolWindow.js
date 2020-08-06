import React, {useState} from 'react';
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import "./ToolWindow.css";

const ToolWindow = (props) => {

    const toggleUp = "▲";
    const toggleDown = "▼";

    const [toggleIcon, setToggleIcon] = useState(toggleUp);

    const iconToggle = () => {
        if (toggleIcon === toggleUp) {
            setToggleIcon(toggleDown)
        }
        else if(toggleIcon === toggleDown){
            setToggleIcon(toggleUp)
        }
    }

    return (
        <Accordion defaultActiveKey="0">
        <Card
            // style={{border:"2px solid #707070"}}
        >
                <Accordion.Toggle
                    onMouseDown={iconToggle}
                    as={Card.Header}
                    eventKey="0"
                    className="openAccordion"
                    // style={{
                    //     display: "flex",
                    //     justifyContent: "space-between",
                    //     paddingLeft: "1rem",
                    //     paddingRight: "1rem",
                    //     backgroundColor: "white",
                    //     fontFamily: 'Lato, sans-serif',
                    //     fontWeight:"bold",
                    //     fontSize:"16px"}}
                        >
                    <div>{props.heading}</div>
                    <div className="toggleArrow">{toggleIcon}</div>
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0">
            <Card.Body>
                {props.children}
            </Card.Body>
            </Accordion.Collapse>
        </Card>
        </Accordion>
    )
}

export default ToolWindow;