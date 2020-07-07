import React from "react";

const maxDistance = 50;
const doubleBondOffset=10;

const pathDistance = (startX, startY, endX, endY) => {
    let dx = endX - startX;
    let dy = endY - startY;
    const distance = Math.sqrt((dx**2) + (dy**2))

    return distance;
}

const pathDisRatio = (clickedDistance) => {
    const ratio = maxDistance/clickedDistance;
    return ratio;
}

const calculateAngle = (startX, startY, endX, endY) => {
    let dx = startX - endX;
    let dy = startY - endY;
    let theta_rad = Math.atan2(-dy, -dx); // gives answer in rads
    let theta_deg = theta_rad*(180/Math.PI)  // convert rads to degrees
    if (theta_deg < 0) {
        theta_deg += 360
    }
    return theta_deg;
}

// Check if DB is horizontal
const isBondHorizontal = (angle) => {
    if (( 175 <= angle && angle <= 180 ) ||
        ( 180 <= angle && angle <= 190 ) ||
        ( 350 <= angle && angle <= 360 ) ||
        ( 0 <= angle && angle <= 15)) {
        return true;
    }
}

const bond = (startX, startY, endX, endY , startAtom="CH3", endAtom="CH3", bondOrder=0) => {
    let path="";

    const pathdist = pathDistance(startX, startY, endX, endY);
    const ratio = pathDisRatio(pathdist)
    const angle =  calculateAngle(startX, startY, endX, endY);

    // if path distance is >maxPointDist

    // because start is zero must add starting coords

    // const newEndY = startY + Math.sin(angle) * maxPointDist;
    // const newEndX = startX + Math.cos(angle) * maxPointDist;
    const newEndX = ((1-ratio)*startX) + (ratio*endX);
    const newEndY = ((1-ratio)*startY) + (ratio*endY);

    // Reassign the final
    endX=newEndX;
    endY=newEndY;

    // SINGLE BOND
    if (bondOrder === 1) {
            path = ("M" + startX + "," + startY + "L" + endX + "," + endY)
    }

    // DOUBLE BOND - want the start and end pos to be mid point between lines (say the spacing is 10px?)
    if (bondOrder === 2) {
        // HORIZONTAL DB
        if (isBondHorizontal(angle)){
            path = ("M" + (startX) + "," + (startY) + "L" + (endX) + "," + (endY) +
                "M" + (startX) + "," + (startY+doubleBondOffset) + "L" + (endX) + "," + (endY+doubleBondOffset))
        }

        // DIAGONAL OR VERTICAL DB
        else{
        path = ("M" + (startX) + "," + startY + "L" + (endX) + "," + endY +
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
    return {startX, startY, endX, endY , startAtom, endAtom, bondOrder, path, angle}
}

export default bond;