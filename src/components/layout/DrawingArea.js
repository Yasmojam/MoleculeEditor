import React, {useEffect, useRef, useState} from 'react';
import {Layer, Stage, Path} from "react-konva";
import Vectors from "./assets/Vectors";
import KonvaImage from "../KonvaImage";
import {useSelectedTool} from "../ToolContexProvider";
import bond from "./bondpaths";



const DrawingArea = (tool) => {
    // can use ref to store any object that must be preserved on rerender
    const stageRef = useRef(null)
    const [stageScale, setStageScale] = useState(1);
    const [stageX, setStageX] = useState(0);
    const [stageY, setStageY] = useState(0);

    // const [currentCoords, setCurrentCoords] = useState([]);
    const [previousCoords, setPreviousCoords] = useState([])

    const [konvaImages, setKonvaImages] = useState([]); // list of dimensions and positions to be rendered
    const [bondRenders, setBondRenders] = useState([]); //bond specifications




    // For dimensions for centering konvaImages
    const width = 50;
    const height = 50;
    const hypotenuse = Math.sqrt(width ** 2 + height ** 2);

    const smallWidth = 25;
    const smallHeight = 25;

    const selectedTool = useSelectedTool().tool;

    const switchTool = (tool) => {
        switch(tool) {
            default:
                return 0;
            case "transform":
            case "selection":
            case "text":
                return 1;

            case "radical":
            case "minus":
            case "plus":
            case "neg_dipole":
            case "pos_dipole":
            case "dipole":
                return 2;

            case "single":
                return 3;

            case "double":
                return 4;
        }
    }

    // every time component rerenders this is recalled
    useEffect(() => {
        console.log(previousCoords)

        const newBondRenders = bondRenders.slice()

        // single
        if (switchTool(selectedTool) === 3 && previousCoords.length%2 === 0 && previousCoords.length > 0) {
            const startX = previousCoords[previousCoords.length - 2].x;
            const startY = previousCoords[previousCoords.length - 2].y;
            const endX = previousCoords[previousCoords.length - 1].x;
            const endY = previousCoords[previousCoords.length - 1].y;
            newBondRenders.push(
                bond(startX, startY, endX, endY,"CH3", "CH3", 1)
            )
        }
        // double
        if (switchTool(selectedTool) === 4 && previousCoords.length%2 === 0 && previousCoords.length > 0) {
            const startX = previousCoords[previousCoords.length - 2].x;
            const startY = previousCoords[previousCoords.length - 2].y;
            const endX = previousCoords[previousCoords.length - 1].x;
            const endY = previousCoords[previousCoords.length - 1].y;
            newBondRenders.push(
                bond(startX, startY, endX, endY,"CH2", "CH2", 2)
            )
        }

        setBondRenders(newBondRenders);

    }, [previousCoords])

    useEffect(() => {
        console.log(konvaImages);
    }, [konvaImages])

    useEffect(() => {
        console.log("Selected tool:" + selectedTool);
    }, [selectedTool])

    useEffect(() => {
        console.log(bondRenders)
    }, [bondRenders])


    // Currently adds image to layer
    const onMouseClick = (event) => {
        console.log("click");
        // todo: Have this be assignable for url, width, height, ect.


        const newKonvaImages = konvaImages.slice()


        // Store new current coord
        const currentCoord = {x: event.evt.layerX, y: event.evt.layerY};

        // Add currentCoord to list of previous coord
        setPreviousCoords([...previousCoords, currentCoord]);
        console.log("Current coord: " + currentCoord);

        if (switchTool(selectedTool) === 0) {
            newKonvaImages.push({
                key: newKonvaImages.length,
                url: Vectors[selectedTool], // Dictionary accessor
                x: (event.evt.layerX - width / 2),
                y: (event.evt.layerY - height / 2),
                width: width,
                height: height
            });
        }

        // For not placable tools
        if (switchTool(selectedTool) === 1) {

        }

        // charges
        if (switchTool(selectedTool) === 2) {
            newKonvaImages.push({
                key: newKonvaImages.length,
                url: Vectors[selectedTool], // Dictionary accessor
                x: (event.evt.layerX - smallWidth / 2),
                y: (event.evt.layerY - smallHeight / 2),
                width: smallWidth,
                height: smallHeight
            })
        }






        // console.log(newKonvaImages);

        setKonvaImages(newKonvaImages);



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
                {bondRenders.map(bond => {
                    return(
                        <Path
                            key={bondRenders.indexOf(bond)}
                            stroke="black"
                            data={bond.path}
                        />
                    )
                })}
                <Path
                    key={0}
                    stroke="black"
                    data="M50,100,264.285714285714d3L200,92.85714285714289L275,264.2857142857143L350,92.85714285714289L350,350L275,350L200,350L125,350L50,350Z"
                />
                {/*<Text text="Some text on canvas" fontSize={15} />*/}
                {/*<Circle x={200} y={100} radius={50} fill="green" />*/}
            </Layer>
        </Stage>
    );

}
export default DrawingArea;