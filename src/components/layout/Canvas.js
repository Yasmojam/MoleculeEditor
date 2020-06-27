import React, {Component} from 'react';
import { Stage, Layer, Circle, Text, Image} from "react-konva";
import Vectors from "./assets/Vectors";
import Atom from "../Atom";
import VaderImage from "../VaderImage";

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


    render() {
        return (
                <Stage

                    width={842}
                    height={595}

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
                        {/*<Image image={Vectors.benzene} />*/}
                        <Text text="Some text on canvas" fontSize={15} />
                        <Circle x={200} y={100} radius={50} fill="green" />
                    </Layer>
                </Stage>
        );
    }
}

export default Canvas;