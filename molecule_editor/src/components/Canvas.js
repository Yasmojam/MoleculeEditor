import React, {Component} from 'react';

class Canvas extends Component {
    render() {
        return (
            <div className="workspace" style={{width:"auto", height:"auto", padding:"10px", margin:"20px", textAlign:"center"}}>
                <div className="canvas"
                     style={{
                         width:"842px",
                         height:"595px",
                         background:"white",
                         position: "fixed",
                         left:"50%",
                         top:"50%",
                         transform: "translate(-50%, -50%)",
                         padding:"10px",
                         margin:"20px"
                     }}>
                </div>
            </div>
        );
    }
}

export default Canvas;