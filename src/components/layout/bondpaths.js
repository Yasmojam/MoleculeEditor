import React from "react";

const bond = (startX, startY, endX, endY , startAtom="CH3", endAtom="CH3", bondOrder=0) => {
    let path="";
    const doubleBondOffset=10;

    //SINGLE BOND
    if (bondOrder === 1) {
        path = ("M" + startX + "," + startY + "L" + endX + "," + endY)
    }

    // DOUBLE BOND - want the start and end pos to be mid point between lines (say the spacing is 10px?)
    if (bondOrder === 2) {
        path = ("M" + (startX-doubleBondOffset) + "," + startY + "L" + (endX-doubleBondOffset) + "," + endY +
            "M" + (startX+doubleBondOffset) + "," + startY + "L" + (endX+doubleBondOffset) + "," + endY)
    }

    return {startX, startY, endX, endY , startAtom, endAtom, bondOrder, path}
}

export default bond;