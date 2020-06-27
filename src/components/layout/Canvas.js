import React, {Component} from 'react';
import { Stage, Layer, Circle, Text,Image} from "react-konva";
import useImage from "use-image";
import Vectors from "./assets/Vectors";
import KonvaImage from "../KonvaImage";

class Canvas extends Component {
    onMouseClick = (event) => {
        console.log("click")
    }

    onMouseUnclick = (event) => {
        console.log("unclick")
    }

    onMouseMove = (event) => {
        console.log("mouse moving")
    }

    handleExportClick = () => {
        console.log(this.stageRef.getStage().toDataURL());
    }



    render() {
        return (
                <Stage

                    width={842}
                    height={595}

                    ref={node => { this.stageRef = node}}

                    onMouseDown={this.onMouseClick}
                    onMouseUp={this.onMouseUnclick}
                    onMouseMove={this.onMouseMove}

                    className="canvas"
                     style={{
                         display:"flex",
                         top: "0px",
                         left: "0px",
                         right: "0px",
                         margin: "0.5em auto",
                         background:"white",
                         border: "1px solid black"

                     }}>
                    <Layer>
                        <KonvaImage url={Vectors.transform} height={500} width={500}/>
                        <Text text="Some text on canvas" fontSize={15} />
                        <Circle x={200} y={100} radius={50} fill="green" />
                    </Layer>
                </Stage>
        );
    }
}

export default Canvas;