import React from 'react';
import Card from "react-bootstrap/Card";


const ToolWindow = (props) => {
    return (
        <Card style={{height:"auto", width: "230px", border:"2px solid #707070"}}>
                <Card.Header
                    style={{
                        backgroundColor: "white",
                        fontFamily: 'Lato, sans-serif',
                        fontWeight:"bold",
                        fontSize:"16px"}}>
                    {props.heading}
            </Card.Header>
            <Card.Body>{props.children}</Card.Body>
        </Card>
    )
}

export default ToolWindow;