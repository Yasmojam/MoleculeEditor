const maxDistance = 50;
const doubleBondOffset=5;

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
              bondOrder: Number, snapped: Boolean = false) => {
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
    if (bondOrder === 1) {
            path = ("M" + startX + "," + startY + "L" + endX + "," + endY)
    }

    // DOUBLE BOND - want the start and end pos to be mid point between lines (say the spacing is 10px?)
    if (bondOrder === 2) {
        // HORIZONTAL DB
        if (isBondHorizontal(angle)){
            path = ("M" + (startX) + "," + (startY-doubleBondOffset) + "L" + (endX) + "," + (endY-doubleBondOffset) +
                "M" + (startX) + "," + (startY+doubleBondOffset) + "L" + (endX) + "," + (endY+doubleBondOffset))
        }

        // DIAGONAL OR VERTICAL DB
        else{
        path = ("M" + (startX-doubleBondOffset) + "," + startY + "L" + (endX-doubleBondOffset) + "," + endY +
            "M" + (startX+doubleBondOffset) + "," + startY + "L" + (endX+doubleBondOffset) + "," + endY)
        }
    }

    if (bondOrder === 3) {
        if (isBondHorizontal(angle)){
            path = ("M" + (startX) + "," + (startY-doubleBondOffset) + "L" + (endX) + "," + (endY-doubleBondOffset) +
                "M" + startX + "," + startY + "L" + endX + "," + endY +
                "M" + (startX) + "," + (startY+doubleBondOffset) + "L" + (endX) + "," + (endY+doubleBondOffset))
        }

        // DIAGONAL OR VERTICAL DB
        else{
            path = ("M" + (startX-doubleBondOffset) + "," + startY + "L" + (endX-doubleBondOffset) + "," + endY +
                "M" + startX + "," + startY + "L" + endX + "," + endY +
                "M" + (startX+doubleBondOffset) + "," + startY + "L" + (endX+doubleBondOffset) + "," + endY)
        }
    }
    return {startCoord:{x:startX, y:startY}, endCoord: {x: endX, y:endY}, midPoint, startAtom, endAtom, bondOrder, path, angle}
}



export default bond;