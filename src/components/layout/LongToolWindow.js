import React from 'react';
import Card from "react-bootstrap/Card";


const LongToolWindow = (props) => {
    return (
        <Card style={{width:"640px", margin:"10px", border:"2px solid #707070"}}>
                <Card.Header>{props.heading}</Card.Header>
                    <Card.Body>
                        {props.children}
                    </Card.Body>
        </Card>
    )
}

export default LongToolWindow;