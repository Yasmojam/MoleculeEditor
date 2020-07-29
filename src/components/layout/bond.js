const maxDistance = 50;
const doubleBondOffset=5;
const tripleBondOffset= doubleBondOffset*1.5;
const quadrupleBondOffset=doubleBondOffset*2;
const backwardPlaneOffset = 1;


const pathDistance = (startCoord: Object, endCoord: Object) => {
    const dx = endCoord.x - startCoord.x;
    const dy = endCoord.y - startCoord.y;
    const distance = Math.sqrt((dx**2) + (dy**2))

    return distance;
}

const pathDisRatio = (clickedDistance: Number) => {
    const ratio = maxDistance/clickedDistance;
    return ratio;
}

const calculateAngle = (startCoord: Object, endCoord: Object) => {
    const dx = endCoord.x - startCoord.x;
    const dy = endCoord.y - startCoord.y;
    let theta_rad = Math.atan2(-dy, -dx); // gives answer in rads
    let theta_deg = theta_rad*(180/Math.PI)  // convert rads to degrees
    if (theta_deg < 0) {
        theta_deg += 360
    }
    return theta_deg;
}

// Returns true if DB is horizontal
const isBondHorizontal = (angle: Number) => {
    if (( 175 <= angle && angle <= 180 ) ||
        ( 180 <= angle && angle <= 190 ) ||
        ( 350 <= angle && angle <= 360 ) ||
        ( 0 <= angle && angle <= 15)) {
        return true;
    }
}

const bond = (startCoord: Object, endCoord: Object,
              startAtom: Number, endAtom: Number,
              bondOrder: Number, bondType: String, snapped: Boolean = false) => {
    let path="";
    let startX = startCoord.x
    let startY = startCoord.y
    let endX = endCoord.x
    let endY = endCoord.y


    const pathdist = pathDistance(startCoord, endCoord);
    const ratio = pathDisRatio(pathdist)
    const angle =  calculateAngle(startCoord, endCoord);


    // if bond doesnt snap then recalculate the bond length to maxPointDist
    if (!snapped) {
        // const newEndY = startY + Math.sin(angle) * maxPointDist;
        // const newEndX = startX + Math.cos(angle) * maxPointDist;
        const newEndX = ((1-ratio)*startX) + (ratio*endX);
        const newEndY = ((1-ratio)*startY) + (ratio*endY);
        // Reassign the new end coord to end coords
        endX = newEndX;
        endY = newEndY;
    }

    // midPoint
    const midPoint = {x: (endX+startX)/2, y: (endY+startY)/2 };

    // SINGLE BOND
    if ((bondOrder === 1 && bondType === "single") ||
        (bondOrder === 1 && bondType === "backward_plane") ||
        (bondOrder === 1 && bondType === "intermediate") ) {
            path = ("M" + startX + "," + startY + "L" + endX + "," + endY)
    }

    // DOUBLE BOND - want the start and end pos to be mid point between lines (say the spacing is 10px?)
    if (bondOrder === 2 && bondType === "double") {
        // HORIZONTAL DB
        if (isBondHorizontal(angle)){
            path = ("M" + (startX) + "," + (startY-doubleBondOffset) + "L" + (endX) + "," + (endY-doubleBondOffset) +
                "M" + (startX) + "," + (startY+doubleBondOffset) + "L" + (endX) + "," + (endY+doubleBondOffset))
        }

        // DIAGONAL OR VERTICAL
        else{
        path = ("M" + (startX-doubleBondOffset) + "," + startY + "L" + (endX-doubleBondOffset) + "," + endY +
            "M" + (startX+doubleBondOffset) + "," + startY + "L" + (endX+doubleBondOffset) + "," + endY)
        }
    }

    // TRIPLE BOND
    if (bondOrder === 3 && bondType === "triple") {
        if (isBondHorizontal(angle)){
            path = ("M" + (startX) + "," + (startY-tripleBondOffset) + "L" + (endX) + "," + (endY-tripleBondOffset) +
                "M" + startX + "," + startY + "L" + endX + "," + endY +
                "M" + (startX) + "," + (startY+tripleBondOffset) + "L" + (endX) + "," + (endY+tripleBondOffset))
        }

        // DIAGONAL OR VERTICAL
        else{
            path = ("M" + (startX-tripleBondOffset) + "," + startY + "L" + (endX-tripleBondOffset) + "," + endY +
                "M" + startX + "," + startY + "L" + endX + "," + endY +
                "M" + (startX+tripleBondOffset) + "," + startY + "L" + (endX+tripleBondOffset) + "," + endY)
        }
    }

    // QUADRUPLE BOND
    if (bondOrder === 4 && bondType === "quadruple") {
        if (isBondHorizontal(angle)){
            path = ("M" + (startX) + "," + (startY-quadrupleBondOffset) + "L" + (endX) + "," + (endY-quadrupleBondOffset) +
                "M" + (startX) + "," + (startY-(quadrupleBondOffset/3)) + "L" + (endX) + "," + (endY-(quadrupleBondOffset/3)) +
                "M" + (startX) + "," + (startY+(quadrupleBondOffset/3)) + "L" + (endX) + "," + (endY+(quadrupleBondOffset/3)) +
                "M" + (startX) + "," + (startY+quadrupleBondOffset) + "L" + (endX) + "," + (endY+quadrupleBondOffset))
        }

        // DIAGONAL OR VERTICAL
        else{
            path = (
                "M" + (startX-quadrupleBondOffset) + "," + startY + "L" + (endX-quadrupleBondOffset) + "," + endY +
                "M" + (startX-(quadrupleBondOffset/3)) + "," + startY + "L" + (endX-(quadrupleBondOffset/3)) + "," + endY +
                "M" + (startX+(quadrupleBondOffset/3)) + "," + startY + "L" + (endX+(quadrupleBondOffset/3)) + "," + endY +
                "M" + (startX+quadrupleBondOffset) + "," + startY + "L" + (endX+quadrupleBondOffset) + "," + endY)
        }
    }

    if (bondOrder === 1 && bondType === "forward_plane") {
        if (isBondHorizontal(angle)) {
            path = ("M" + (startX) + "," + (startY) +
                    "L" + (endX) + "," + (endY-doubleBondOffset) +
                    "L" + (endX) + "," + (endY+doubleBondOffset) + "Z")
        }

        // DIAGONAL OR VERTICAL
        else{
            path = ("M" + (startX) + "," + (startY) +
                "L" + (endX-doubleBondOffset) + "," + (endY) +
                "L" + (endX+doubleBondOffset) + "," + (endY) + "Z")
        }
    }


    return {
        startCoord:{x:startX, y:startY},
        endCoord: {x: endX, y:endY},
        midPoint,
        startAtom,
        endAtom,
        bondOrder,
        bondType,
        path,
        angle}
}



export default bond;