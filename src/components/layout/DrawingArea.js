import React, {useEffect, useRef, useState} from 'react';
import { Stage, Layer} from "react-konva";
import Vectors from "./assets/Vectors";
import KonvaImage from "../KonvaImage";

const DrawingArea = () => {
    // can use ref to store any object that must be preserved on rerender
    const stageRef = useRef(null)
    const [stageScale, setStageScale] = useState(1);
    const [stageX, setStageX] = useState(0);
    const [stageY, setStageY] = useState(0);

    const [coords, setCoords] = useState([]);
    const [konvaImages, setKonvaImages] = useState([]); // list of dimensions and positions to be rendered
    const [selectedTool, setSelectedTool] = useState(null);

    // For dimensions for centering konvaImages
    const width = 50;
    const height = 50;
    const hypotenuse = Math.sqrt(width**2 + height**2);


    // every time component rerenders this is recalled
    useEffect(() => {
        console.log("render");
    }, [])


    // Currently adds image to layer
    const onMouseClick = (event) => {
        console.log("click");
        const stage = stageRef.current;
        // Update coords
        const currentCoord = stage.getStage().getPointerPosition();

        setCoords([...coords, currentCoord]);
        console.log(coords);

        // todo: Have this be assignable for url, width, height, ect.
        const newKonvaImages = konvaImages.slice();
        newKonvaImages.push({
            key: newKonvaImages.length,
            url: Vectors.single,
            x: event.evt.layerX - width/2,
            y: event.evt.layerY - height/2,
            width: width,
            height: height
        });

        console.log(newKonvaImages);

        setKonvaImages(newKonvaImages);

        }

    const onMouseUnclick = (event) => {
        console.log("unclick");

    }

    const onMouseMove = (event) => {
        console.log("mouse moving");
        const mouseX = event.evt.layerX;
        const mouseY = event.evt.layerY;
    }

    // ZOOM
   const onWheel = (event) => {
       console.log("wheel moving");
       event.evt.preventDefault();

       const scalingConst = 1.01;
       const stage = stageRef.current.getStage();
       const previousScale = stage.scaleX();
       const mousePointTo = {
           x: stage.getPointerPosition().x / previousScale - stage.x() / previousScale,
           y: stage.getPointerPosition().y / previousScale - stage.y() / previousScale
       };

       const newScale = event.evt.deltaY > 0 ? previousScale * scalingConst : previousScale / scalingConst;

       setStageScale(newScale);
       setStageX(mousePointTo.x - stage.getPointerPosition().x / newScale);
       setStageY(mousePointTo.y - stage.getPointerPosition().y / newScale);
   }


    return (
        <Stage

            ref={stageRef}

            width={842}
            height={595}

            scaleX={stageScale}
            scaleY={stageScale}
            x={stageX}
            y={stageY}

            onMouseDown={onMouseClick}
            onMouseUp={onMouseUnclick}
            onMouseMove={onMouseMove}
            onWheel={onWheel}

            style={{
                display: "flex",
                top: "0px",
                left: "0px",
                right: "0px",
                margin: "0.5em auto",
                background: "white",
                border: "1px solid black"

            }}>
            <Layer>
                {konvaImages.map(konvaImage => {
                return (
                    <KonvaImage
                        key={konvaImage.key}
                        url={konvaImage.url}
                        x={konvaImage.x}
                        y={konvaImage.y}
                        height={konvaImage.height}
                        width={konvaImage.width}
                       />
                );
                })}
                {/*<Text text="Some text on canvas" fontSize={15} />*/}
                {/*<Circle x={200} y={100} radius={50} fill="green" />*/}
            </Layer>
        </Stage>
    );

}
export default DrawingArea;