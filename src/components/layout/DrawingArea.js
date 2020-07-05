import React, {useEffect, useRef, useState} from 'react';
import {Layer, Stage} from "react-konva";
import Vectors from "./assets/Vectors";
import KonvaImage from "../KonvaImage";
import {useSelectedTool} from "../ToolContexProvider";

const DrawingArea = (tool) => {
    // can use ref to store any object that must be preserved on rerender
    const stageRef = useRef(null)
    const [stageScale, setStageScale] = useState(1);
    const [stageX, setStageX] = useState(0);
    const [stageY, setStageY] = useState(0);

    const [coords, setCoords] = useState([]);
    const [konvaImages, setKonvaImages] = useState([]); // list of dimensions and positions to be rendered

    // For dimensions for centering konvaImages
    const width = 50;
    const height = 50;
    const hypotenuse = Math.sqrt(width ** 2 + height ** 2);

    const smallWidth = 25;
    const smallHeight = 25;

    const selectedTool = useSelectedTool().tool;

    const switchTool = (tool) => {
        switch(tool) {
            case "transform":
            case "selection":
            case "text":
                return 0;

            case "radical":
            case "minus":
            case "plus":
            case "neg_dipole":
            case "pos_dipole":
            case "dipole":
                return 1;

            default:
                return 2;
        }
    }

    // every time component rerenders this is recalled
    useEffect(() => {
        console.log("useEffectFire:");
        console.log(konvaImages)

    }, [konvaImages])


    // Currently adds image to layer
    const onMouseClick = (event) => {
        console.log("click");
        // todo: Have this be assignable for url, width, height, ect.

        const newKonvaImages = konvaImages.slice()

        const currentCoord = {x: event.evt.layerX, y: event.evt.layerY};

        setCoords([...coords, currentCoord]);
        console.log(currentCoord);

        // For not placable tools
        if (switchTool(selectedTool) === 0) {

        }

        // charges
        if (switchTool(selectedTool) === 1) {
            newKonvaImages.push({
                key: newKonvaImages.length,
                url: Vectors[selectedTool], // Dictionary accessor
                x: (event.evt.layerX - smallWidth / 2),
                y: (event.evt.layerY - smallHeight / 2),
                width: smallWidth,
                height: smallHeight
            })
        }

        if (switchTool(selectedTool) === 2) {
            newKonvaImages.push({
                key: newKonvaImages.length,
                url: Vectors[selectedTool], // Dictionary accessor
                x: (event.evt.layerX - width / 2),
                y: (event.evt.layerY - height / 2),
                width: width,
                height: height
            });
        }

        // const newKonvaImages = konvaImages.slice()
        // // Update coords
        // // CHECK IF THE TOOL CLEARS CANVAS STATE
        // if (selectedTool !== "transform" || selectedTool !== "selection" || selectedTool !== "text") {
        //     const currentCoord = {x: event.evt.layerX, y: event.evt.layerY};
        //
        //     setCoords([...coords, currentCoord]);
        //     console.log(currentCoord);
        //
        //
        //     // CHECK IF ITS A CHARGE WHICH WOULD APPEAR SMALL
        //     if (selectedTool !== "radical" || selectedTool !== "minus" || selectedTool !== "plus" || selectedTool !== "neg_dipole" || selectedTool !== "pos_dipole") {
        //         newKonvaImages.push({
        //             key: newKonvaImages.length,
        //             url: Vectors[selectedTool], // Dictionary accessor
        //             x: (event.evt.layerX - width / 2),
        //             y: (event.evt.layerY - height / 2),
        //             width: width,
        //             height: height
        //         });
        //     } else {
        //         newKonvaImages.push({
        //             key: newKonvaImages.length,
        //             url: Vectors[selectedTool], // Dictionary accessor
        //             x: (event.evt.layerX - smallWidth / 2),
        //             y: (event.evt.layerY - smallHeight / 2),
        //             width: smallWidth,
        //             height: smallHeight
        //         })
        //     }
        //
            console.log(newKonvaImages);

            setKonvaImages(newKonvaImages);
        //
        // }
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

        const newScale = event.evt.deltaY > 0 ? (previousScale * scalingConst) : (previousScale / scalingConst);

        setStageScale(newScale);
        setStageX((mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale);
        setStageY((mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale);
    }


    return (
        <Stage

            ref={stageRef}

            width={842 * stageScale}
            height={595 * stageScale}

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