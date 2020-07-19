import React, {useEffect, useRef, useState} from 'react';
import {Layer, Stage, Path, Circle, Text, Rect} from "react-konva";
import Vectors from "./assets/Vectors";
import KonvaImage from "../KonvaImage";
import {useSelectedTool} from "../ToolContexProvider";
import bond from "./bond";
import {chemElement} from "../cheminfo/chemElement";
import {atom, findAtomicNumBySymbol} from "./atom";

/**
 * Functional component which represents the drawing canvas.
 */
const DrawingArea = () => {
    // can use ref to store any object that must be preserved on rerender
    const stageRef = useRef(null)

    // Track all coord; used for snapping and useEffects
    const [allCoordsHistory, setAllCoordsHistory] = useState([]);
    const [bondCoordsHistory, setBondCoordsHistory] = useState([]); // Track bond coords
    const [bondMidPointCoords, setBondMidPointCoords] = useState([]) // Track bond mid points for highlights
    const [atomCoordsHistory, setAtomCoordsHistory] = useState([]); // Track atom coords

    const [konvaImages, setKonvaImages] = useState([]); // list of dimensions and positions to be rendered
    const [bondRenders, setBondRenders] = useState([]); // list of bond specifications
    const [atomRenders, setAtomRenders] = useState([]) // list of atom specifications

    const [previewRender, setPreviewRenders] = useState({path:""});
    const [previewCoord, setPreviewCoord] = useState(null);

    const [highlightEndOpacity, setHighlightEndOpacity] = useState(0);
    const [highlightEndCoord, setHighlightEndCoord] = useState({x: 0, y: 0});

    const [highlightBondOpacity, setHighlightBondOpacity] = useState(0);
    const [highlightBondCoord, setHighlightBondCoord] = useState({x: 0, y: 0});
    const [highlightBondRotation, setHighlightBondRotation] = useState(0);


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
     * @param tool
     *  Returns true if tool is a atom drawing tool.
     */
    const isToolAtom = (tool) => {
        for (let element of chemElement) {
            if (element !== null) {
                if (element.Symbol === tool) {
                    return true;
                }
            }
        }
    }

    /**
     * @param tool
     *  Returns true if tool is a bond drawing tool.
     */
    const isToolBond = (tool) => {
        if (selectedTool === "single" ||
            selectedTool === "double" ||
            selectedTool === "triple" ||
            selectedTool === "quadruple" ||
            selectedTool === "forward_plane" ||
            selectedTool === "backward_plane" ||
            selectedTool === "unspecified_plane" ||
            selectedTool === "dative" ||
            selectedTool === "intermediate"){
            return true;
        }
    }

    /**
     * Function which adds atom to list of atoms to be rendered to canvas.
     * Todo allow for checking associated bonds and adding them to atom if snaps to bond.
     */
    const atomRenderToCanvas = (atomicNum: Number) => {
        const newAtomRenders = atomRenders.slice()

        const coord =
            {x: atomCoordsHistory[atomCoordsHistory.length - 1].x, y: atomCoordsHistory[atomCoordsHistory.length - 1].y};
        newAtomRenders.push(
            atom(atomicNum, coord)
        )

        setAtomRenders(newAtomRenders);
        setAllCoordsHistory([...allCoordsHistory, coord]);
    }


    /**
     * Function which returns true if the length of list of previous coords is even and
     * more than zero.
     */
    const isBondRenderValid = () => {
        if (bondCoordsHistory.length%2 === 0 &&
            bondCoordsHistory.length > 0) {
            return true;
        }
    }

    /**
     * Function which adds bond to list of bonds to be rendered to canvas.
     * Todo replace start and end atom if snaps to atom on either end.
     */
    const bondRenderToCanvas = (bondOrder: Number) => {
        const newBondRenders = bondRenders.slice();

        const startCoord =
            {x: bondCoordsHistory[bondCoordsHistory.length - 2].x, y: bondCoordsHistory[bondCoordsHistory.length - 2].y};
        const endCoord =
            {x: bondCoordsHistory[bondCoordsHistory.length - 1].x, y: bondCoordsHistory[bondCoordsHistory.length - 1].y};
        newBondRenders.push(
            bond(startCoord, endCoord,6, 6, bondOrder)
        )

        setBondRenders(newBondRenders);

        setAllCoordsHistory([...allCoordsHistory, startCoord]);
        setAllCoordsHistory([...allCoordsHistory, endCoord]);
    }

    /**
     * Function which records the newest midpoint to list of midpoints.
     * Todo replace start and end atom if snaps to atom on either end.
     */
    const recordMidPoints = () => {
        const newBondMidPoint = bondMidPointCoords.slice();

        newBondMidPoint.push(bondRenders[bondRenders.length-1].midPoint);
        setBondMidPointCoords(newBondMidPoint);
    }

    /**
     * Hook which updates list of bond objects for rendering to canvas.
     * Triggers when list of previous coords is updated.
     */
    useEffect(() => {
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
        // Preselected atom buttons
        // Todo assign all other buttons so this can be an else statement
        if (isToolAtom(selectedTool)) {
            if (allCoordsHistory.length > 0) {
                const atomicNumber = findAtomicNumBySymbol(selectedTool);
                atomRenderToCanvas(atomicNumber);
            }
        }

        console.log("Previous coords:")
        console.log(allCoordsHistory)
    }, [bondCoordsHistory])

    /**
     * Hook which updates list of bond objects for rendering to canvas.
     * Triggers when list of previous coords is updated.
     */
    useEffect(() => {
        // Preselected atom buttons
        // Todo assign all other buttons so this can be an else statement
        if (isToolAtom(selectedTool)) {
            if (allCoordsHistory.length > 0) {
                const atomicNumber = findAtomicNumBySymbol(selectedTool);
                atomRenderToCanvas(atomicNumber);
            }
        }
        console.log("Previous coords:")
        console.log(allCoordsHistory)
    }, [atomCoordsHistory])


    /**
     * Function which sets bond preview to be rendered to canvas.
     */
    const previewBondToCanvas = (bondOrder: Number) => {
        const startCoord =
            {x: bondCoordsHistory[bondCoordsHistory.length - 1].x, y: bondCoordsHistory[bondCoordsHistory.length - 1].y};
        const endCoord =
            {x: previewCoord.x, y:  previewCoord.y};
        setPreviewRenders(
            bond(startCoord, endCoord,6, 6, bondOrder)
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
            bondCoordsHistory.length > 0 &&
            bondCoordsHistory.length%2 !== 0 ){
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
     * Highlight the closest previously clicked coord to preview coord.
     */
    useEffect(() => {
        if (isCoordSnappable(previewCoord) && isBondCoorEndorMid(previewCoord) === "end"){
            setHighlightEndCoord(
                {x: snappableCoord(previewCoord).x,
                    y: snappableCoord(previewCoord).y});
            setHighlightEndOpacity(0.5);
        }
        else {
            setHighlightEndOpacity(0);
        }
    }, [previewCoord])

    /**
     * Highlight the closest midpoint bond to preview coord and set its rotaion
     */
    useEffect(() => {
        if (isCoordSnappable(previewCoord) && isBondCoorEndorMid(previewCoord) === "mid"){
            setHighlightBondCoord(
                {x: snappableCoord(previewCoord).x,
                    y: snappableCoord(previewCoord).y});

            for (let bond of bondRenders) {
                if (bond.midPoint === snappableCoord(previewCoord)){
                    setHighlightBondRotation(bond.angle);
                }
            }

            setHighlightBondOpacity(0.5);
        }
        else {
            setHighlightBondOpacity(0);
        }
    }, [previewCoord])


    useEffect(() => {
        console.log("KonvaImages:")
        console.log(konvaImages);
    }, [konvaImages])

    /**
     * Hook which removes last coordinate click and resets preview
     * if tool is switched before finalising bond render.
     */
    useEffect(() => {
        console.log("Selected tool:" + selectedTool);
        if (!isBondRenderValid() && isToolBond(selectedTool)){
            // Remove last entry
            const newBondCoordsHistory = bondCoordsHistory.slice(-1, 1);
            setBondCoordsHistory(newBondCoordsHistory);
            // Reset preview
            setPreviewCoord(null);
            setPreviewRenders({path: ""});
        }
    }, [selectedTool])

    /**
     * Hook which clears and refreshes state.
     * Triggers on selected tool change.
     */
    useEffect(() => {
        if (selectedTool === "clear"){
            setBondRenders([]);
            setAtomRenders([]);
            setKonvaImages([]);
            setAllCoordsHistory([]);
            setAtomCoordsHistory([]);
            setBondCoordsHistory([]);
            setPreviewRenders({path:""});
            setHighlightEndOpacity(0);
            setHighlightEndCoord({x: 0, y: 0});
        }
    }, [selectedTool])


    /**
     * Hook which logs angles of bonds and updates the list of mid points.
     * Triggers on bondRenders change.
     */
    useEffect(() => {
        console.log("Bond Renders")
        console.log(bondRenders)
        if (bondRenders.length >= 1) {
            console.log("Angle:");
            console.log(bondRenders[bondRenders.length - 1].angle);
        }

        // set new mid points
        if (bondRenders.length > 0) {
            recordMidPoints();
        }
    }, [bondRenders])

    // log mid points
    useEffect(() => {
        console.log("Midpoints:")
        console.log(bondMidPointCoords)
    }, [bondMidPointCoords])

    // log Atoms
    useEffect(() => {
        if (atomRenders.length > 0){
            console.log("Atom Renders:");
            console.log(atomRenders);
        }
    }, [atomRenders])


    /**
     * Returns true if tryCoord is within snappable distance of any start or end pair of coordinates listed in bond render.
     * Returns true if tryCoord is within snappable distance of any atom.
     */
    const isCoordSnappable = (tryCoord: Object) => {
        if (tryCoord !== null) {
            for (let bond of bondRenders) {
                const startX = bond.startCoord.x;
                const startY = bond.startCoord.y;
                const endX = bond.endCoord.x;
                const endY = bond.endCoord.y;
                const midpointX = bond.midPoint.x;
                const midpointY = bond.midPoint.y;

                // if within +- 5 of start/end x and start/end y coord
                if ((startX - snappableDistance <= tryCoord.x && tryCoord.x <= startX + snappableDistance) &&
                    (startY - snappableDistance <= tryCoord.y && tryCoord.y <= startY + snappableDistance)){
                    return true;
                }
                if ((endX - snappableDistance <= tryCoord.x && tryCoord.x <= endX + snappableDistance) &&
                    (endY - snappableDistance <= tryCoord.y && tryCoord.y <= endY + snappableDistance)) {
                    return true;
                }
                // midpoint check
                if ((midpointX - snappableDistance <= tryCoord.x && tryCoord.x <= midpointX + snappableDistance) &&
                    (midpointY - snappableDistance <= tryCoord.y && tryCoord.y <= midpointY + snappableDistance)) {
                    return true;
                }
            }
            for (let atom of atomRenders) {
                const atomX = atom.coord.x;
                const atomY = atom.coord.y;
                if ((atomX - snappableDistance <= tryCoord.x && tryCoord.x <= atomX + snappableDistance) &&
                    (atomY - snappableDistance <= tryCoord.y && tryCoord.y <= atomY + snappableDistance)) {
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
            const midpointX = bond.midPoint.x;
            const midpointY = bond.midPoint.y;

            if ((startX-snappableDistance <= tryCoord.x && tryCoord.x <= startX+snappableDistance) &&
                (startY-snappableDistance <= tryCoord.y && tryCoord.y <= startY + snappableDistance)){
                return {x: startX, y: startY};
            }
            if ((endX- snappableDistance <= tryCoord.x && tryCoord.x <= endX + snappableDistance) &&
                (endY - snappableDistance <= tryCoord.y && tryCoord.y <= endY + snappableDistance)) {
                return {x: endX, y: endY};
            }
            // midpoint check
            if ((midpointX - snappableDistance <= tryCoord.x && tryCoord.x <= midpointX + snappableDistance) &&
                (midpointY - snappableDistance <= tryCoord.y && tryCoord.y <= midpointY + snappableDistance)) {
                return {x: midpointX, y: midpointY};
            }
        }

        for (let atom of atomRenders) {
            const atomX = atom.coord.x;
            const atomY = atom.coord.y;

            if ((atomX - snappableDistance <= tryCoord.x && tryCoord.x <= atomX + snappableDistance) &&
                (atomY - snappableDistance <= tryCoord.y && tryCoord.y <= atomY + snappableDistance)) {
                return {x: atomX, y: atomY};
            }
        }
    }

    /**
     * Function which returns a string of "end" or "mid" if coord is a bond end or bond midpoint.
     */
    const isBondCoorEndorMid = (tryCoord: Object) => {
        for (let bond of bondRenders) {
        // if within +- 5 of x and y coord
        const startX = bond.startCoord.x;
        const startY = bond.startCoord.y;
        const endX = bond.endCoord.x;
        const endY = bond.endCoord.y;
        const midpointX = bond.midPoint.x;
        const midpointY = bond.midPoint.y;

        if ((startX-snappableDistance <= tryCoord.x && tryCoord.x <= startX+snappableDistance) &&
            (startY-snappableDistance <= tryCoord.y && tryCoord.y <= startY + snappableDistance)){
            return "end";
        }
        if ((endX- snappableDistance <= tryCoord.x && tryCoord.x <= endX + snappableDistance) &&
            (endY - snappableDistance <= tryCoord.y && tryCoord.y <= endY + snappableDistance)) {
            return "end";
        }
        // midpoint check
        if ((midpointX - snappableDistance <= tryCoord.x && tryCoord.x <= midpointX + snappableDistance) &&
            (midpointY - snappableDistance <= tryCoord.y && tryCoord.y <= midpointY + snappableDistance)) {
            return "mid";
        }
    }
    }


    // Currently adds image to layer
    const onMouseClick = (event) => {
        console.log("click");

        // Erase preview
        setPreviewCoord([])
        setPreviewRenders({path:""})

        // Store new current coord
        let currentCoord = {x: event.evt.layerX, y: event.evt.layerY};

        // Todo update with isArrow()/isCharge() later when these are implemented with states
        if (isCoordSnappable(currentCoord)){
            // Add snappable coord to list of previous coords instead
            currentCoord = snappableCoord(currentCoord)
            if (isToolAtom(selectedTool)){
                setAtomCoordsHistory([...atomCoordsHistory, currentCoord]);
            }
            if (isToolBond(selectedTool)){
                setBondCoordsHistory([...bondCoordsHistory, currentCoord]);
            }
            // setAllCoordsHistory([...allCoordsHistory, currentCoord]);
        }
        else {
            // Add currentCoord to list of coord
            if (isToolAtom(selectedTool)){
                setAtomCoordsHistory([...atomCoordsHistory, currentCoord]);
            }
            if (isToolBond(selectedTool)){
                setBondCoordsHistory([...bondCoordsHistory, currentCoord]);
            }
            // setAllCoordsHistory([...allCoordsHistory, currentCoord]);
        }


        console.log("Current coord: " + currentCoord);

        const newKonvaImages = konvaImages.slice()

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
                {atomRenders.map(atom => {
                    return(
                        <Text
                        /*  Minus 8px centres the atoms, otherwise they render to the right and below of click  */
                        key = {atomRenders.indexOf(atom)}
                        x = {atom.coord.x -6}
                        y = {atom.coord.y -6}
                        text={atom.symbol}
                        fontSize={15}
                        />
                    )
                })}
                <Path
                    stroke="black"
                    data={previewRender.path}
                />
                <Circle
                    x={highlightEndCoord.x}
                    y={highlightEndCoord.y}
                    radius={snappableDistance}
                    fill="yellow"
                    opacity={highlightEndOpacity}
                />
                <Rect
                    x={highlightBondCoord.x - (snappableDistance/2)}
                    y={highlightBondCoord.y - (snappableDistance/2)}
                    width={50}
                    height={snappableDistance}
                    stroke="blue"
                    opacity={highlightBondOpacity}
                    rotation={highlightBondRotation}
                />
            </Layer>
        </Stage>
    );

}
export default DrawingArea;