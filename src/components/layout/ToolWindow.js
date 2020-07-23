import React from 'react';
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

const ToolWindow = (props) => {
    return (
        <Accordion defaultActiveKey="0">
        <Card style={{border:"2px solid #707070"}}>
                <Accordion.Toggle as={Card.Header} eventKey="0"
                    style={{
                        backgroundColor: "white",
                        fontFamily: 'Lato, sans-serif',
                        fontWeight:"bold",
                        fontSize:"16px"}}>
                    {props.heading}
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