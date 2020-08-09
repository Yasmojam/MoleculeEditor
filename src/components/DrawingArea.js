import React, {useEffect, useRef, useState} from 'react';
import {Circle, Ellipse, Layer, Path, Stage, Text} from "react-konva";
import {useSelectedTool} from "./ToolContexProvider";
import Bond from "../classes/Bond";
import {chemElement} from "../cheminfo/chemElement";
import Atom from "../classes/Atom";
import findAtomicNumBySymbol from "../functions/findAtomicNumBySymbol";
import {handleExport} from "../functions/downloadPNG";
import "./DrawingArea.css"

/**
 * Component which represents the drawing area
 */
const DrawingArea = () => {
    const stageRef = useRef(null);

    // Track all coord; used for snapping and useEffects
    const [canvasClickHistory, setCanvasClickHistory] = useState([]);
    const [bondCoordsHistory, setBondCoordsHistory] = useState([]); // Track bond coords
    const [atomCoordsHistory, setAtomCoordsHistory] = useState([]); // Track atom coords

    const [bondRenders, setBondRenders] = useState([]); // list of bond specifications
    const [atomRenders, setAtomRenders] = useState([]) // list of atom specifications

    const [previewRender, setPreviewRenders] = useState({bondType:"", path: ""});
    const [previewCoord, setPreviewCoord] = useState({x: null, y: null});

    const [highlighAtomOpacity, setHighlightAtomOpacity] = useState(0);
    const [highlightAtomCoord, setHighlightAtomCoord] = useState({x: 0, y: 0});

    const [highlightBondOpacity, setHighlightBondOpacity] = useState(0);
    const [highlightBondCoord, setHighlightBondCoord] = useState({x: 0, y: 0});
    const [highlightBondRotation, setHighlightBondRotation] = useState(0);


    const selectedTool = useSelectedTool().tool;

    const snappableDistance = 10;

    useEffect(() => {
        console.log("Atom coords:");
        console.log(atomCoordsHistory);

    }, [atomCoordsHistory])

    useEffect(() => {
        console.log("Bond coords:");
        console.log(bondCoordsHistory);
    }, [bondCoordsHistory])

    useEffect(() => {
        console.log("Canvas click history:");
        console.log(canvasClickHistory);
    }, [canvasClickHistory])

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
    const isToolBond = (tool: String) => {
        if (selectedTool === "single" ||
            selectedTool === "double" ||
            selectedTool === "triple" ||
            selectedTool === "quadruple" ||
            selectedTool === "forward_plane" ||
            selectedTool === "backward_plane" ||
            selectedTool === "unspecified_plane" ||
            selectedTool === "dative" ||
            selectedTool === "intermediate") {
            return true;
        }
    }

    /**
     * Function which adds atom to list of atoms to be rendered to canvas.
     */
    const atomRenderToCanvas = (atomicNum: Number) => {
        let newAtomRenders = atomRenders.slice()

        const coord =
            {
                x: atomCoordsHistory[atomCoordsHistory.length - 1].x,
                y: atomCoordsHistory[atomCoordsHistory.length - 1].y
            };

        // If click an atom, replace it
        if (atomRenders.length > 0){
            for (let atom of atomRenders){
                if (atom.coord.x === coord.x && atom.coord.y === coord.y){
                    console.log("match")
                    atomRenders[atomRenders.indexOf(atom)] = new Atom(atomicNum, coord);
                    newAtomRenders = atomRenders;
                    return;
                }
            }
            console.log("not match")
            newAtomRenders.push(
                new Atom(atomicNum, coord)
            )

        }
        else {
            console.log("less than 0")
            newAtomRenders.push(
                new Atom(atomicNum, coord)
            )
        }

        setAtomRenders(newAtomRenders);

        // only update canvas history as atom history is updated by {mouseDown}.
        setCanvasClickHistory([...canvasClickHistory, coord]);
    }

    /**
     * Function which returns true if the length of list of previous coords is even and
     * more than zero.
     */
    const isBondRenderValid = () => {
        if (bondCoordsHistory.length % 2 === 0 &&
            bondCoordsHistory.length > 0) {
            return true;
        }
    }


    /**
     * Function which shortens bond length for bond which has a start/end coord which matches parameter.
     * Sets the bond's new atoms and the visability.
     */
    const atomShortenBondCoord = (atom: Object) => {
        // must update bondRenders to rerender to canvas
        for (let tryBond of bondRenders){
            if ((tryBond.startCoord.x === atom.coord.x) && (tryBond.startCoord.y === atom.coord.y)){
                tryBond.shortenBondStart();
                tryBond.startAtom = atom.atomicNum;
                tryBond.startAtomVis = true;
            }
            if ((tryBond.endCoord.x === atom.coord.x) && (tryBond.endCoord.y === atom.coord.y)){
                tryBond.shortenBondEnd();
                tryBond.endAtom = atom.atomicNum;
                tryBond.endAtomVis = true;
            }
        }
    }

    /**
     * Function which adds bond to list of bonds to be rendered to canvas.
     * Todo replace start and end atom if snaps to atom on either end.
     */
    const bondRenderToCanvas = (bondOrder: Number) => {
        const newBondRenders = bondRenders.slice();
        const bondType = selectedTool;

        let startCoord =
            {
                x: bondCoordsHistory[bondCoordsHistory.length - 2].x,
                y: bondCoordsHistory[bondCoordsHistory.length - 2].y
            };
        let endCoord =
            {
                x: bondCoordsHistory[bondCoordsHistory.length - 1].x,
                y: bondCoordsHistory[bondCoordsHistory.length - 1].y
            };


        newBondRenders.push(
            new Bond(startCoord, endCoord, 6, 6, bondOrder, bondType, isCoordSnappable(endCoord))
        )

        setBondRenders(newBondRenders);

        // Update all clicks here but not bonds as this is updated by {mouseDown}
        setCanvasClickHistory([...canvasClickHistory, startCoord]);
        setCanvasClickHistory([...canvasClickHistory, endCoord]);
    }

    /**
     * Function which shortens bond starts/ends if there are atoms attached
     * */
 const bondShortenOnRender = (bond: Class) => {
     if (isCoordSnappable(bond.startCoord) && atomRenders.length > 0){
         for (let atom of atomRenders) {
             if (atom.coord.x === bond.startCoord.x && atom.coord.y === bond.startCoord.y){
                bond.shortenBondStart();
                bond.startAtom = atom.atomicNum;
                bond.startAtomVis = true;
             }
         }
     }
     if (isCoordSnappable(bond.endCoord) && atomRenders.length > 0){
         for (let atom of atomRenders) {
             if (atom.coord.x === bond.endCoord.x && atom.coord.y === bond.endCoord.y){
                 bond.shortenBondEnd();
                 bond.endAtom = atom.atomicNum;
                 bond.endAtomVis = true;
             }
         }
     }
 }

    /**
     * Hook which updates list of bond objects for rendering to canvas.
     * Triggers when list of previous coords is updated.
     */
    useEffect(() => {
        // single bond variations
        if ((selectedTool === "single" ||
            selectedTool === "forward_plane" ||
            selectedTool === "backward_plane" ||
            selectedTool === "unspecified_plane" ||
            selectedTool === "dative" ||
            selectedTool === "intermediate")) {
            if (isBondRenderValid()) {
                bondRenderToCanvas(1);
            }
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

        if (selectedTool === "quadruple" &&
            isBondRenderValid()) {
            bondRenderToCanvas(4)
        }


        // Preselected atom buttons
        // Todo assign all other buttons so this can be an else statement
        if (isToolAtom(selectedTool)) {
            if (canvasClickHistory.length >= 0) {
                const atomicNumber = findAtomicNumBySymbol(selectedTool);
                atomRenderToCanvas(atomicNumber);
            }
        }

        console.log("Canvas click History:")
        console.log(canvasClickHistory)
    }, [bondCoordsHistory])

    /**
     * Hook which updates list of bond objects for rendering to canvas.
     * Triggers when list of previous coords is updated.
     */
    useEffect(() => {
        // Preselected atom buttons
        // Todo assign all other buttons so this can be an else statement
        if (isToolAtom(selectedTool)) {
            if (canvasClickHistory.length >= 0) {
                const atomicNumber = findAtomicNumBySymbol(selectedTool);
                atomRenderToCanvas(atomicNumber);
            }
        }
    }, [atomCoordsHistory])


    /**
     * Function which sets bond preview to be rendered to canvas.
     */
    const previewBondToCanvas = (bondOrder: Number) => {
        const bondType = selectedTool;

        const startCoord =
            {
                x: bondCoordsHistory[bondCoordsHistory.length - 1].x,
                y: bondCoordsHistory[bondCoordsHistory.length - 1].y
            };
        const endCoord =
            {x: previewCoord.x, y: previewCoord.y};
        setPreviewRenders(
            new Bond(startCoord, endCoord, 6, 6, bondOrder, bondType, isCoordSnappable(endCoord))
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
            bondCoordsHistory.length % 2 !== 0) {
            // single and variations
            if (selectedTool === "single" ||
                selectedTool === "forward_plane" ||
                selectedTool === "backward_plane" ||
                selectedTool === "unspecified_plane" ||
                selectedTool === "dative" ||
                selectedTool === "intermediate") {
                previewBondToCanvas(1);
            }
            // double
            if (selectedTool === "double") {
                previewBondToCanvas(2);
            }
            // triple
            if (selectedTool === "triple") {
                previewBondToCanvas(3)
            }
            // quadruple
            if (selectedTool === "quadruple") {
                previewBondToCanvas(4)
            }
        }
    }, [previewCoord])

    /**
     * Function which handles which preview should be rendered to the screen.
     */
    const handlePreview = () => {
        if (previewRender.bondType === "backward_plane"){
            return (<Path
                stroke="black"
                strokeWidth={10}
                dashEnabled={true}
                dash={[2]}
                fill="black"
                data={previewRender.path}
            />)
        }
        if (previewRender.bondType === "intermediate"){
            return (<Path
                stroke="black"
                dashEnabled={true}
                dash={[5]}
                fill="black"
                data={previewRender.path}
            />)
        }
        else {
            return (<Path
                stroke="black"
                fill="black"
                data={previewRender.path}
            />)
    }
    }


    /**
     * Highlight the closest previously clicked coord to preview coord.
     */
    useEffect(() => {
        if ((isCoordSnappable(previewCoord) && isBondCoorEndorMid(previewCoord) === "end")  ||
            (isCoordSnappable(previewCoord) && isCoordAtom(snappableCoord(previewCoord)))) {
            setHighlightAtomCoord(
                {
                    x: snappableCoord(previewCoord).x,
                    y: snappableCoord(previewCoord).y
                });
            setHighlightAtomOpacity(0.5);
        } else {
            setHighlightAtomOpacity(0);
        }
    }, [previewCoord])

    /**
     * Highlight the closest midpoint bond to preview coord and set its rotaion
     */
    useEffect(() => {
        if (isCoordSnappable(previewCoord) && isBondCoorEndorMid(previewCoord) === "mid") {
            setHighlightBondCoord(
                {
                    x: snappableCoord(previewCoord).x,
                    y: snappableCoord(previewCoord).y
                });

            console.log("snappableCoord")
            console.log(snappableCoord(previewCoord))

            for (let bond of bondRenders) {
                if (snappableCoord(previewCoord).x === bond.midPoint.x &&
                    snappableCoord(previewCoord).y === bond.midPoint.y) {
                    setHighlightBondRotation(bond.angle);
                }
            }

            setHighlightBondOpacity(0.5);
        } else {
            setHighlightBondOpacity(0);
        }
    }, [previewCoord])

    /**
     * Hook which removes last coordinate click and resets preview
     * if tool is switched before finalising bond render.
     */
    useEffect(() => {
        console.log("Selected tool:" + selectedTool);
        if (!isBondRenderValid() && isToolBond(selectedTool)) {
            // Remove last entry
            const newBondCoordsHistory = bondCoordsHistory.slice(-1, 1);
            setBondCoordsHistory(newBondCoordsHistory);
            // Reset preview
            setPreviewCoord(null);
            setPreviewRenders({path: ""});
        }
    }, [selectedTool])

    /**
     * Hook which triggers action based on selected header tools.
     * When clear tool: clears and refreshes state.
     * When export tool: prompts user to download png of canvas.
     * Triggers on selected tool change.
     */
    useEffect(() => {
        if (selectedTool === "clear") {
            setBondRenders([]);
            setAtomRenders([]);
            setCanvasClickHistory([]);
            setAtomCoordsHistory([]);
            setBondCoordsHistory([]);
            setPreviewRenders({path: ""});
            setHighlightAtomOpacity(0);
            setHighlightAtomCoord({x: 0, y: 0});
        }
        if (selectedTool === "export") {
            handleExport(stageRef);
        }
    }, [selectedTool])


    /**
     * Hook which logs angles of bonds and updates the list of mid points.
     * Also adjusts bond lengths.
     * Triggers on bondRenders change.
     */
    useEffect(() => {
        if (bondRenders.length>0) {
            // Check if this bond needs shortend and if so shorten
            bondShortenOnRender(bondRenders[bondRenders.length - 1]);
        }
        console.log("Bond Renders")
        console.log(bondRenders)
        if (bondRenders.length >= 1) {
            console.log("Angle:");
            console.log(bondRenders[bondRenders.length - 1].angle);
        }
    }, [bondRenders])

    // log Atoms
    useEffect(() => {
        if (atomRenders.length > 0) {
            // Update bond lengths
            atomShortenBondCoord(atomRenders[atomRenders.length-1]);
            console.log("Atom Renders:");
            console.log(atomRenders);
        }
    }, [atomRenders])

    //log rect angle
    useEffect(() => {
        console.log("New rect angle");
        console.log(highlightBondRotation);
    }, [highlightBondRotation])

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
                    (startY - snappableDistance <= tryCoord.y && tryCoord.y <= startY + snappableDistance)) {
                    // check bond does not have vis atom at the end
                    // if (isBondFromStartCoordSnappable(snappableCoord(tryCoord))) {
                    //     return true;
                    // }
                    return true;
                }
                if ((endX - snappableDistance <= tryCoord.x && tryCoord.x <= endX + snappableDistance) &&
                    (endY - snappableDistance <= tryCoord.y && tryCoord.y <= endY + snappableDistance)) {
                    // check bond does not have vis atom at the end
                    // if (isBondFromEndCoordSnappable(snappableCoord(tryCoord))) {
                    //     return true;
                    // }
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
        for (let atom of atomRenders) {
            const atomX = atom.coord.x;
            const atomY = atom.coord.y;

            if ((atomX - snappableDistance <= tryCoord.x && tryCoord.x <= atomX + snappableDistance) &&
                (atomY - snappableDistance <= tryCoord.y && tryCoord.y <= atomY + snappableDistance)) {
                return  {x: atomX, y: atomY};
            }
        }

        for (let bond of bondRenders) {
            // if within +- 5 of x and y coord
            const startX = bond.startCoord.x;
            const startY = bond.startCoord.y;
            const endX = bond.endCoord.x;
            const endY = bond.endCoord.y;
            const midpointX = bond.midPoint.x;
            const midpointY = bond.midPoint.y;

            if ((startX - snappableDistance <= tryCoord.x && tryCoord.x <= startX + snappableDistance) &&
                (startY - snappableDistance <= tryCoord.y && tryCoord.y <= startY + snappableDistance)) {
                    return  {x: startX, y: startY};

            }
            else if ((endX - snappableDistance <= tryCoord.x && tryCoord.x <= endX + snappableDistance) &&
                (endY - snappableDistance <= tryCoord.y && tryCoord.y <= endY + snappableDistance)) {
                    return {x: endX, y: endY};
            }
            // midpoint check
            else if ((midpointX - snappableDistance <= tryCoord.x && tryCoord.x <= midpointX + snappableDistance) &&
                (midpointY - snappableDistance <= tryCoord.y && tryCoord.y <= midpointY + snappableDistance)) {
               return  {x: midpointX, y: midpointY};
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

            if ((startX - snappableDistance <= tryCoord.x && tryCoord.x <= startX + snappableDistance) &&
                (startY - snappableDistance <= tryCoord.y && tryCoord.y <= startY + snappableDistance)) {
                return "end";
            }
            if ((endX - snappableDistance <= tryCoord.x && tryCoord.x <= endX + snappableDistance) &&
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

    /**
     * Function which returns true if coord is a atom.
     */
    const isCoordAtom = (tryCoord: Object) => {
        for (let atom of atomRenders) {
            const atomX = atom.coord.x;
            const atomY = atom.coord.y;
            if ((atomX - snappableDistance <= tryCoord.x && tryCoord.x <= atomX + snappableDistance) &&
                (atomY - snappableDistance <= tryCoord.y && tryCoord.y <= atomY + snappableDistance)) {
                return true;
            }
        }
    }

    /**
     * Function which returns path distance.
     */
    const pathDistance = (startCoord: Object, endCoord: Object) => {
        const dx = endCoord.x - startCoord.x;
        const dy = endCoord.y - startCoord.y;
        const distance = Math.sqrt((dx**2) + (dy**2))

        return distance;
    }

    /**
     * Function which lengthens bond starts/ends on connected atom erase
     */
    const lengthenBondsOnAtomErase = (atomCoord: Object) => {
        // bond starts
        if (bondRenders.length > 0) {
            for (let bond of bondRenders) {
                console.log("lengthen fire");
                const bondStartCoord = bond.startCoord;
                const bondEndCoord = bond.endCoord;

                // m + n (original bond distance will be the opposite end to the atom)
                // START EVENT
                const atomToEnd = pathDistance(atomCoord, bondEndCoord);
                console.log("path atom to end");
                console.log(atomToEnd);
                // END EVENT
                const startToAtom = pathDistance(bondStartCoord, atomCoord);

                const m = 10;

                const nStart = atomToEnd - 10;
                const nEnd = startToAtom - 10;

                // calculate shortened start
                const newStartX = (((m*bondEndCoord.x)+(nStart*atomCoord.x))/atomToEnd);
                const newStartY = (((m*bondEndCoord.y)+(nStart*atomCoord.y))/atomToEnd);
                // calculate shortened end
                const newEndX = (((nEnd * atomCoord.x) + (m * bondStartCoord.x)) / startToAtom);
                const newEndY = (((nEnd * atomCoord.y) + (m * bondStartCoord.y)) / startToAtom);

                console.log("CalculatedStart:")
                console.log({x: newStartX, y: newStartY});

                console.log("BondRenders:");
                console.log(bondRenders);

                if (newStartX === bond.startCoord.x && newStartY === bond.startCoord.y) {
                    console.log("start erase fire");
                    bond.lengthenBond("start", atomCoord);
                    bond.startAtom = 6;
                    bond.startAtomVis = false;
                }
                else if (newEndX === bond.endCoord.x && newEndY === bond.endCoord.y) {
                    console.log("end erase fire");
                    bond.lengthenBond("end", atomCoord);
                    bond.endAtom = 6;
                    bond.endAtomVis = false;
                }
            }
        }
    }

    /**
     * Function which erases entity if it is snapped to with eraser on.
     */
    const eraseEntity = (coord: Object) => {
        for (let atom of atomRenders){
            if (atom.coord.x === coord.x && atom.coord.y === coord.y){
                const indexRemove = atomRenders.indexOf(atom);
                atomRenders.splice(indexRemove, 1);
                setAtomRenders(atomRenders);
                lengthenBondsOnAtomErase(atom.coord);
                return;
            }
        }
        for (let bond of bondRenders) {
            if (bond.midPoint.x === coord.x && bond.midPoint.y === coord.y){
                const indexRemove = bondRenders.indexOf(bond);
                bondRenders.splice(indexRemove, 1);
                setBondRenders(bondRenders);
                return;
            }
            if (bond.startCoord.x === coord.x && bond.startCoord.y === coord.y){
                const indexRemove = bondRenders.indexOf(bond);
                bondRenders.splice(indexRemove, 1);
                setBondRenders(bondRenders);
                return;
            }
            if (bond.endCoord.x === coord.x && bond.endCoord.y === coord.y){
                const indexRemove = bondRenders.indexOf(bond);
                bondRenders.splice(indexRemove, 1);
                setBondRenders(bondRenders);
                return;
            }
        }
    }

    // Currently adds image to layer
    const onMouseClick = (event) => {
        // console.log("click");

        // Erase preview
        setPreviewCoord([])
        setPreviewRenders({path: ""})

        // Store new current coord
        let currentCoord = {x: event.evt.layerX, y: event.evt.layerY};

        // Todo update with isArrow()/isCharge() later when these are implemented with states
        if (isCoordSnappable(currentCoord)) {
            // Add snappable coord to list of previous coords instead
            currentCoord = snappableCoord(currentCoord);
            if (isToolAtom(selectedTool)) {
                setAtomCoordsHistory([...atomCoordsHistory, currentCoord]);
            }
            if (isToolBond(selectedTool)) {
                setBondCoordsHistory([...bondCoordsHistory, currentCoord]);
            }
            // Erase bond
            if (selectedTool === "erase"){
                eraseEntity(snappableCoord(currentCoord));
            }
            setCanvasClickHistory([...canvasClickHistory, currentCoord]);

        } else if (!isCoordSnappable(currentCoord)) {
            // Add currentCoord to list of coord
            if (isToolAtom(selectedTool)) {
                setAtomCoordsHistory([...atomCoordsHistory, currentCoord]);
            }
            if (isToolBond(selectedTool)) {
                setBondCoordsHistory([...bondCoordsHistory, currentCoord]);
            }
            setCanvasClickHistory([...canvasClickHistory, currentCoord]);
        }
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

            className="canvas"

            width={750}
            height={500}

            onMouseDown={onMouseClick}
            onMouseMove={onMouseMove}

            ref={stageRef}

            // style={{
            //     margin: "0.5em auto",
            //     background: "white",
            // }}
        >
            <Layer>
                {bondRenders.map(bond => {
                    if (bond.bondType === "backward_plane"){
                        return (
                            <Path
                                key={bondRenders.indexOf(bond)}
                                stroke="black"
                                strokeWidth={10}
                                dashEnabled={true}
                                dash={[2]}
                                fill="black"
                                data={bond.path}
                            />
                        )
                    }
                    if (bond.bondType === "intermediate"){
                        return (
                            <Path
                                key={bondRenders.indexOf(bond)}
                                stroke="black"
                                dashEnabled={true}
                                dash={[5]}
                                fill="black"
                                data={bond.path}
                            />
                        )
                    }
                    else{
                    return (
                        <Path
                            key={bondRenders.indexOf(bond)}
                            stroke="black"
                            fill="black"
                            data={bond.path}
                        />
                    )
                }})}
                {atomRenders.map(atom => {
                    return (
                        <Text
                            /*  Minus 8px centres the atoms, otherwise they render to the right and below of click  */
                            key={atomRenders.indexOf(atom)}
                            x={atom.coord.x - 6}
                            y={atom.coord.y - 6}
                            text={atom.symbol}
                            fontSize={15}
                        />
                    )
                })}

                {/*PREVIEW RENDERS*/}
                {handlePreview()}


                <Circle
                    x={highlightAtomCoord.x}
                    y={highlightAtomCoord.y}
                    radius={snappableDistance}
                    stroke="blue"
                    opacity={highlighAtomOpacity}
                />
                <Ellipse
                    x={highlightBondCoord.x}
                    y={highlightBondCoord.y}
                    radiusX={25}
                    radiusY={snappableDistance / 2}
                    stroke="blue"
                    opacity={highlightBondOpacity}
                    rotation={highlightBondRotation}
                />
            </Layer>
        </Stage>
    );

}
export default DrawingArea;