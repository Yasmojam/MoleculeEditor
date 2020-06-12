import React, {Component} from 'react';

class Canvas extends Component {
    render() {
        return (
                <div className="canvas"
                     style={{
                         display:"flex",
                         position:"absolute",
                         top: "0px",
                         left: "0px",
                         right: "0px",
                         margin: "5em auto",
                         width:"842px",
                         height:"595px",
                         background:"white",

                     }}>
                </div>
        );
    }
}

export default Canvas;