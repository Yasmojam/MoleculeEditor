import React, {useEffect, useRef, useState} from 'react';
import {Layer, Stage, Path, Circle} from "react-konva";
import Vectors from "./assets/Vectors";
import KonvaImage from "../KonvaImage";
import {useSelectedTool} from "../ToolContexProvider";
import bond from "./bondpaths";

/**
 * Functional component which represents the drawing canvas.
 */
const DrawingArea = () => {
    // can use ref to store any object that must be preserved on rerender
    const stageRef = useRef(null)
    const [stageScale, setStageScale] = useState(1);
    const [stageX, setStageX] = useState(0);
    const [stageY, setStageY] = useState(0);

    // const [currentCoords, setCurrentCoords] = useState([]);
    const [previousCoords, setPreviousCoords] = useState([])

    const [konvaImages, setKonvaImages] = useState([]); // list of dimensions and positions to be rendered
    const [bondRenders, setBondRenders] = useState([]); //bond specifications

    const [previewRender, setPreviewRenders] = useState({path:""});
    const [previewCoord, setPreviewCoord] = useState(null);

    const [highlight, setHighlight] = useState({opacity: 0});

    // For dimensions for centering konvaImages
    const width = 50;
    const height = 50;

    const smallWidth = 25;
    const smallHeight = 25;

    const selectedTool = useSelectedTool().tool;

    /**
     * Function which returns a number based on the currently selected tool.
     */
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

            case "triple":
                return 5;
        }
    }

    /**
     * Function which returns true if the length of list of previous coords is even and
     * more than zero.
     */
    const isBondRenderValid = () => {
        if (previousCoords.length%2 === 0 &&
            previousCoords.length > 0) {
            return true;
        }
    }

    /**
     * Hook which updates list of bond objects for rendering to canvas.
     * Triggers when list of previous coords is updated.
     */
    useEffect(() => {
        console.log(previousCoords)

        const newBondRenders = bondRenders.slice()

        // single
        if (switchTool(selectedTool) === 3 &&
            isBondRenderValid()) {
            const startX = previousCoords[previousCoords.length - 2].x;
            const startY = previousCoords[previousCoords.length - 2].y;
            const endX = previousCoords[previousCoords.length - 1].x;
            const endY = previousCoords[previousCoords.length - 1].y;
            newBondRenders.push(
                bond(startX, startY, endX, endY,"CH3", "CH3", 1)
            )
        }
        // double
        if (switchTool(selectedTool) === 4 &&
            isBondRenderValid()) {
            const startX = previousCoords[previousCoords.length - 2].x;
            const startY = previousCoords[previousCoords.length - 2].y;
            const endX = previousCoords[previousCoords.length - 1].x;
            const endY = previousCoords[previousCoords.length - 1].y;
            newBondRenders.push(
                bond(startX, startY, endX, endY,"CH2", "CH2", 2)
            )
        }

        if (switchTool(selectedTool) === 5 &&
            isBondRenderValid()) {
            const startX = previousCoords[previousCoords.length - 2].x;
            const startY = previousCoords[previousCoords.length - 2].y;
            const endX = previousCoords[previousCoords.length - 1].x;
            const endY = previousCoords[previousCoords.length - 1].y;
            newBondRenders.push(
                bond(startX, startY, endX, endY,"CH", "CH", 3)
            )
        }

        setBondRenders(newBondRenders);
    }, [previousCoords])

    // DRAW PREVIEW BEFORE CLICK
    /**
     * Hook which updates the preview bond object for rendering a preview to canvas.
     * Triggers when list of preview coords is updated.
     */
    useEffect(() => {
        // Draw previews
        // Check if odd number of clicks on canvas and clicks length is more than zero
        if (previewCoord !== null &&
            previousCoords.length > 0 &&
            previousCoords.length%2 !== 0 ){
            // single
            if (switchTool(selectedTool) === 3) {
                const startX = previousCoords[previousCoords.length - 1].x;
                const startY = previousCoords[previousCoords.length - 1].y;
                const endX = previewCoord.x;
                const endY = previewCoord.y;
                setPreviewRenders(
                    bond(startX, startY, endX, endY,"CH3", "CH3", 1)
                )
            }
            // double
            if (switchTool(selectedTool) === 4) {
                const startX = previousCoords[previousCoords.length - 1].x;
                const startY = previousCoords[previousCoords.length - 1].y;
                const endX = previewCoord.x;
                const endY = previewCoord.y;
                setPreviewRenders(
                    bond(startX, startY, endX, endY,"CH2", "CH2", 2)
                )
            }
        }
    }, [previewCoord])

    useEffect(() => {
        console.log(konvaImages);
    }, [konvaImages])

    /**
     * Hook which removes last coordinate click and resets preview
     * if tool is switched before finalising bond render.
     */
    useEffect(() => {
        console.log("Selected tool:" + selectedTool);
        if (!isBondRenderValid()){
            // Remove last entry
            const newPreviousCoords = previousCoords.slice(-1, 1)
            setPreviousCoords(newPreviousCoords)
            // Reset preview
            setPreviewCoord(null)
            setPreviewRenders({path: ""})
        }
    }, [selectedTool])

    useEffect(() => {
        console.log(bondRenders)
        // log angles
        if (bondRenders.length >= 1) {
            console.log(bondRenders[bondRenders.length - 1].angle)
        }
    }, [bondRenders])


    /**
     * Function which returns a coordinate object if parameter coordinate is within a snappable distance of it.
     * Returns null if it is not within snappable distance of any coordinate.
     */
    const snappableCoord = (tryCoord) => {
        const snappableDistance = 5;
        for (const [coord] of previousCoords){
            // if within +- 5 of x and y coord
            if ((coord.x-snappableDistance <= tryCoord.x  && tryCoord.x <= coord.x+snappableDistance ) &&
                ((coord.y-snappableDistance <= tryCoord.y  && tryCoord.y <= coord.y+snappableDistance ))){
                return coord;
            }
            else{
                return null;
            }
        }
            }

    // Currently adds image to layer
    const onMouseClick = (event) => {
        console.log("click");

        // Erase preview
        setPreviewCoord(null);

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
    }

    const onMouseUnclick = (event) => {
        console.log("unclick");

    }

    const onMouseMove = (event) => {
        console.log("mouse moving");
        const currentCoord = {x: event.evt.layerX, y: event.evt.layerY};

        // Assign new moving coord
        setPreviewCoord(currentCoord);

        // console.log("Current mouse position: (" +
        //     currentCoord.x + ", " + currentCoord.y + ")")

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
                    stroke="black"
                    data={previewRender.path}
                />
                {/*<Circle x={200} y={100} radius={50} fill="yellow" opacity={0.5}/>*/}
            </Layer>
        </Stage>
    );

}
export default DrawingArea;