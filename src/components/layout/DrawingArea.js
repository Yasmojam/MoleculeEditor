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

    // const [currentCoords, setCurrentCoords] = useState([]);
    const [previousCoords, setPreviousCoords] = useState([])

    const [konvaImages, setKonvaImages] = useState([]); // list of dimensions and positions to be rendered
    const [bondRenders, setBondRenders] = useState([]); //bond specifications

    const [previewRender, setPreviewRenders] = useState({path:""});
    const [previewCoord, setPreviewCoord] = useState(null);

    const [highlightOpacity, setHighlightOpacity] = useState(0);
    const [highlightCoord, setHighlightCoord] = useState({x: 0, y: 0})

    // For dimensions for centering konvaImages
    const width = 50;
    const height = 50;

    const smallWidth = 25;
    const smallHeight = 25;

    const selectedTool = useSelectedTool().tool;

    const snappableDistance = 15;

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
     * Function which adds bond to list of bonds to be rendered to canvas.
     */
    const bondRenderToCanvas = (bondOrder: Number) => {
        const newBondRenders = bondRenders.slice()

        const startCoord =
            {x: previousCoords[previousCoords.length - 2].x, y: previousCoords[previousCoords.length - 2].y};
        const endCoord =
            {x: previousCoords[previousCoords.length - 1].x, y: previousCoords[previousCoords.length - 1].y};
        newBondRenders.push(
            bond(startCoord, endCoord,12, 12, bondOrder)
        )

        setBondRenders(newBondRenders);
    }
    /**
     * Hook which updates list of bond objects for rendering to canvas.
     * Triggers when list of previous coords is updated.
     */
    useEffect(() => {
        console.log(previousCoords)

        // single
        if (selectedTool === "single" &&
            isBondRenderValid()) {
            bondRenderToCanvas(1);
        }
        // double
        if (selectedTool === "double" &&
            isBondRenderValid()) {
            bondRenderToCanvas(2)
        }

        if (selectedTool === "triple" &&
            isBondRenderValid()) {
            bondRenderToCanvas(3)
        }
    }, [previousCoords])


    /**
     * Function which sets bond preview to be rendered to canvas.
     */
    const previewBondToCanvas = (bondOrder: Number) => {
        const startCoord =
            {x: previousCoords[previousCoords.length - 1].x, y: previousCoords[previousCoords.length - 1].y};
        const endCoord =
            {x: previewCoord.x, y:  previewCoord.y};
        setPreviewRenders(
            bond(startCoord, endCoord,12, 12, bondOrder)
        )
    }

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
            if (selectedTool === "single") {
                previewBondToCanvas(1);
            }
            // double
            if (selectedTool === "double") {
                previewBondToCanvas(2);
            }
        }
    }, [previewCoord])

    /**
     * Highlight the closest clicked coord to preview coord
     */
    useEffect(() => {
        if (isCoordSnappable(previewCoord)){
            setHighlightCoord(
                {x: snappableCoord(previewCoord).x,
                    y: snappableCoord(previewCoord).y});
            setHighlightOpacity(0.5);
        }
        else {
            return;
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

    /**
     * Hook which clears and refreshes state.
     * Triggers on selected tool change.
     */
    useEffect(() => {
        console.log("Selected tool:" + selectedTool);
        if (selectedTool === "clear"){
            setBondRenders([])
            setKonvaImages([])
            setPreviousCoords([])
            setPreviewRenders({path:""})
            setHighlightOpacity(0)
            setHighlightCoord({x: 0, y: 0})
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
     * Returns true if tryCoord is within snappable distance of any start or end pair of coordinates listed in bond render.
     */
    const isCoordSnappable = (tryCoord: Object) => {
        if (tryCoord !== null) {
            for (let bond of bondRenders) {
                const startX = bond.startCoord.x;
                const startY = bond.startCoord.y;
                const endX = bond.endCoord.x;
                const endY = bond.endCoord.y;

                // if within +- 5 of start/end x and start/end y coord
                if ((startX- snappableDistance <= tryCoord.x && tryCoord.x <= startX + snappableDistance) &&
                    (startY - snappableDistance <= tryCoord.y && tryCoord.y <= startY + snappableDistance)){
                    return true;
                }
                if ((endX- snappableDistance <= tryCoord.x && tryCoord.x <= endX + snappableDistance) &&
                    (endY - snappableDistance <= tryCoord.y && tryCoord.y <= endY + snappableDistance)) {
                    return true;
                }
            }
        }
    }

    /**
     * Function which returns a coordinate object if parameter coordinate is within a snappable distance of it.
     */
    const snappableCoord = (tryCoord: Object) => {
        for (let bond of bondRenders) {
            // if within +- 5 of x and y coord
            const startX = bond.startCoord.x;
            const startY = bond.startCoord.y;
            const endX = bond.endCoord.x;
            const endY = bond.endCoord.y;

            if ((startX-snappableDistance <= tryCoord.x && tryCoord.x <= startX+snappableDistance) &&
                (startY-snappableDistance <= tryCoord.y && tryCoord.y <= startY + snappableDistance)){
                return {x: startX, y: startY};
            }
            if ((endX- snappableDistance <= tryCoord.x && tryCoord.x <= endX + snappableDistance) &&
                (endY - snappableDistance <= tryCoord.y && tryCoord.y <= endY + snappableDistance)) {
                return {x: endX, y: endY};
            }
        }
    }

    // Currently adds image to layer
    const onMouseClick = (event) => {
        console.log("click");

        // Erase preview
        setPreviousCoords([])
        setPreviewRenders({path:""})

        const newKonvaImages = konvaImages.slice()


        // Store new current coord
        let currentCoord = {x: event.evt.layerX, y: event.evt.layerY};

        if (isCoordSnappable(currentCoord)){
            currentCoord = snappableCoord(currentCoord)
            // Add currentCoord to list of previous coord
            setPreviousCoords([...previousCoords, currentCoord]);
        }
        else {
            // Add currentCoord to list of previous coord
            setPreviousCoords([...previousCoords, currentCoord]);
        }


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

    const onMouseMove = (event) => {
        const currentCoord = {x: event.evt.layerX, y: event.evt.layerY};

        // Assign new moving coord
        setPreviewCoord(currentCoord);

        // console.log("Current mouse position: (" +
        //     currentCoord.x + ", " + currentCoord.y + ")")

    }

    return (
        <Stage

            ref={stageRef}

            width={842}
            height={595}

            onMouseDown={onMouseClick}
            onMouseMove={onMouseMove}

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
                <Circle
                    x={highlightCoord.x}
                    y={highlightCoord.y}
                    radius={snappableDistance}
                    fill="yellow"
                    opacity={highlightOpacity}
                />
            </Layer>
        </Stage>
    );

}
export default DrawingArea;