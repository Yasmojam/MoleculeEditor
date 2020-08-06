/**
 * Class which represents a bond.
 * */
class Bond {
    constructor(startCoord: Object,
                endCoord: Object,
                startAtom: Number,
                endAtom: Number,
                bondOrder: Number,
                bondType: String,
                stretchedSnapped: Boolean = false,
                startAtomVis: Boolean = false,
                endAtomVis: Boolean = false
                )
    {
        this._startCoord = startCoord;
        const clickEndCoord = endCoord;
        this._startAtom = startAtom;
        this._endAtom = endAtom;
        this._startAtomVis = startAtomVis;
        this._endAtomVis = endAtomVis;
        this._bondOrder = bondOrder;
        this._bondType = bondType;
        this._startAtomVis = startAtomVis;
        this._endAtomVis = endAtomVis;
        this._stretchedSnapped = stretchedSnapped;


        this._ratio = this.pathDisRatio(this.pathDistance(this.startCoord, clickEndCoord))
        this._endCoord = this.checkEndCoord(clickEndCoord);
        this._pathdist = this.pathDistance(this.startCoord, this.endCoord);
        this._angle = this.calculateAngle(this.startCoord, this.endCoord);
        this._midPoint = this.calculateMidPoint();
        this._path = this.calculatePath(this.bondOrder, this.bondType)

    }

    calculateMidPoint = () => {
        return {x: (this.endCoord.x+this.startCoord.x)/2, y: (this.endCoord.y + this.startCoord.y)/2 }
    }

    /**
     * Function which recalculates initial end coord if end doesn't snap
     * to the bond length to maxPointDist
     * */
    checkEndCoord = (initialEndCoord: Object) => {
        if (!this.snapped) {
            const newEndX = ((1-this.ratio)*this.startCoord.x) + (this.ratio*initialEndCoord.x);
            const newEndY = ((1-this.ratio)*this.startCoord.y) + (this.ratio*initialEndCoord.y);
            // Reassign the end coord to new end coords
            return {x: newEndX, y: newEndY};
        }
        else {
            return initialEndCoord
        }
    }

    get startCoord(): Object {
        return this._startCoord;
    }

    set startCoord(value: Object) {
        this._startCoord = value;
    }

    get endCoord(): Object {
        return this._endCoord;
    }

    set endCoord(value: Object) {
        this._endCoord = value;
    }

    get startAtom(): Number {
        return this._startAtom;
    }

    set startAtom(value: Number) {
        this._startAtom = value;
    }

    get endAtom(): Number {
        return this._endAtom;
    }

    set endAtom(value: Number) {
        this._endAtom = value;
    }

    get startAtomVis(): Boolean {
        return this._startAtomVis;
    }

    set startAtomVis(value: Boolean) {
        this._startAtomVis = value;
    }

    get endAtomVis(): Boolean {
        return this._endAtomVis;
    }

    set endAtomVis(value: Boolean) {
        this._endAtomVis = value;
    }

    get bondOrder(): Number {
        return this._bondOrder;
    }

    set bondOrder(value: Number) {
        this._bondOrder = value;
    }

    get bondType(): String {
        return this._bondType;
    }

    set bondType(value: String) {
        this._bondType = value;
    }

    get snapped(): Boolean {
        return this._stretchedSnapped;
    }

    set snapped(value: Boolean) {
        this._stretchedSnapped = value;
    }

    get pathdist() {
        return this._pathdist;
    }

    set pathdist(value) {
        this._pathdist = value;
    }

    get ratio() {
        return this._ratio;
    }

    set ratio(value) {
        this._ratio = value;
    }

    get angle() {
        return this._angle;
    }

    set angle(value) {
        this._angle = value;
    }

    get midPoint() {
        return this._midPoint;
    }

    set midPoint(value) {
        this._midPoint = value;
    }

    get path() {
        return this._path;
    }

    set path(value) {
        this._path = value;
    }

    /**
     * Function which returns the path distance of a bond
     * */
    pathDistance = (startCoord: Object, endCoord: Object) => {
        const dx = endCoord.x - startCoord.x;
        const dy = endCoord.y - startCoord.y;
        const distance = Math.sqrt((dx**2) + (dy**2))

        return distance;
    }

    /**
     * Function which returns the path distance radio of a bond from max distance of 50px
     * */
    pathDisRatio = (clickedDistance: Number) => {
        const maxDistance = 50;
        const ratio = maxDistance/clickedDistance;
        return ratio;
    }

    /**
     * Function which returns the angle of a bond
     * */
    calculateAngle = (startCoord: Object, endCoord: Object) => {
        const dx = endCoord.x - startCoord.x;
        const dy = endCoord.y - startCoord.y;
        let theta_rad = Math.atan2(-dy, -dx); // gives answer in rads
        let theta_deg = theta_rad*(180/Math.PI)  // convert rads to degrees
        if (theta_deg < 0) {
            theta_deg += 360
        }
        return theta_deg;
    }

    /**
     * Function which returns true if the bond is considered horizontal
     * */
    isBondHorizontal = (angle: Number) => {
        if (( 130 <= angle && angle <= 180 ) ||
            ( 180 <= angle && angle <= 210 ) ||
            ( 310 <= angle && angle <= 360 ) ||
            ( 0 <= angle && angle <= 30)) {
            return true;
        }
    }

    /**
     * Function which shortened bond start coord and recalculates path
     */
    shortenBondStart = () => {
        const bondStartCoord = this.startCoord;
        const bondEndCoord = this.endCoord;
        // m + n
        const oldPathDist = this.pathDistance(bondStartCoord, bondEndCoord);
        // m
        const m = 10;
        // n
        const n = oldPathDist - 10

        const newStartX = (((m*bondEndCoord.x)+(n*bondStartCoord.x))/oldPathDist);
        const newStartY = (((m*bondEndCoord.y)+(n*bondStartCoord.y))/oldPathDist);
        const newStartPoint = {x: newStartX, y: newStartY};

        console.log("Old Start Point");
        console.log(this.startCoord);

        this.startCoord = newStartPoint;
        this.path = this.calculatePath();

        console.log("New Start Point");
        console.log(this.startCoord);
    }


    /**
     * Function which returns a shortened bond end and recalculates path
     */
    shortenBondEnd = () => {
        const bondStartCoord = this.startCoord;
        const bondEndCoord = this.endCoord;
        // m + n
        const oldPathDist = this.pathDistance(bondStartCoord, bondEndCoord);
        // m
        const m = 10;
        // n
        const n = oldPathDist - 10;

        const newEndX = (((n*bondEndCoord.x)+(m*bondStartCoord.x))/oldPathDist);
        const newEndY = (((n*bondEndCoord.y)+(m*bondStartCoord.y))/oldPathDist);
        const newEndPoint = {x: newEndX, y: newEndY};

        console.log("Old end Point");
        console.log(this.endCoord);

        this.endCoord = newEndPoint;
        this.path = this.calculatePath();

        console.log("New end Point");
        console.log(this.endCoord);
    }

    /**
     * Function which lengthens bond coord and recalculates path
     */
    lengthenBond = (bondEndType: String, atomCoord: Object) => {
        if (bondEndType === "start"){
            this.startCoord = atomCoord;
        }
        else if (bondEndType === "end"){
            this.endCoord = atomCoord;
        }

        this.path = this.calculatePath();
    }

    /**
     * Function which returns a path calculated depending on the bond order and type
     * */
    calculatePath = () => {
        const bondOrder = this.bondOrder;
        const bondType = this.bondType;
        const startX = this.startCoord.x;
        const startY = this.startCoord.y;
        const endX = this.endCoord.x;
        const endY = this.endCoord.y;
        const angle = this.angle;

        const doubleBondOffset=5;
        const tripleBondOffset= doubleBondOffset*1.5;
        const quadrupleBondOffset=doubleBondOffset*2;

        // SINGLE BOND
        if ((bondOrder === 1 && bondType === "single") ||
            (bondOrder === 1 && bondType === "backward_plane") ||
            (bondOrder === 1 && bondType === "intermediate") ) {
            return ("M" + startX + "," + startY + "L" + endX + "," + endY)
        }

        // DOUBLE BOND - want the start and end pos to be mid point between lines (say the spacing is 10px?)
        if (bondOrder === 2 && bondType === "double") {
            // HORIZONTAL DB
            if (this.isBondHorizontal(angle)){
                return ("M" + (startX) + "," + (startY-doubleBondOffset) + "L" + (endX) + "," + (endY-doubleBondOffset) +
                    "M" + (startX) + "," + (startY+doubleBondOffset) + "L" + (endX) + "," + (endY+doubleBondOffset))
            }

            // DIAGONAL OR VERTICAL
            else{
                return("M" + (startX-doubleBondOffset) + "," + startY + "L" + (endX-doubleBondOffset) + "," + endY +
                    "M" + (startX+doubleBondOffset) + "," + startY + "L" + (endX+doubleBondOffset) + "," + endY)
            }
        }

        // TRIPLE BOND
        if (bondOrder === 3 && bondType === "triple") {
            if (this.isBondHorizontal(angle)){
                return ("M" + (startX) + "," + (startY-tripleBondOffset) + "L" + (endX) + "," + (endY-tripleBondOffset) +
                    "M" + startX + "," + startY + "L" + endX + "," + endY +
                    "M" + (startX) + "," + (startY+tripleBondOffset) + "L" + (endX) + "," + (endY+tripleBondOffset))
            }

            // DIAGONAL OR VERTICAL
            else{
                return ("M" + (startX-tripleBondOffset) + "," + startY + "L" + (endX-tripleBondOffset) + "," + endY +
                    "M" + startX + "," + startY + "L" + endX + "," + endY +
                    "M" + (startX+tripleBondOffset) + "," + startY + "L" + (endX+tripleBondOffset) + "," + endY)
            }
        }

        // QUADRUPLE BOND
        if (bondOrder === 4 && bondType === "quadruple") {
            if (this.isBondHorizontal(angle)){
                return ("M" + (startX) + "," + (startY-quadrupleBondOffset) + "L" + (endX) + "," + (endY-quadrupleBondOffset) +
                    "M" + (startX) + "," + (startY-(quadrupleBondOffset/3)) + "L" + (endX) + "," + (endY-(quadrupleBondOffset/3)) +
                    "M" + (startX) + "," + (startY+(quadrupleBondOffset/3)) + "L" + (endX) + "," + (endY+(quadrupleBondOffset/3)) +
                    "M" + (startX) + "," + (startY+quadrupleBondOffset) + "L" + (endX) + "," + (endY+quadrupleBondOffset))
            }

            // DIAGONAL OR VERTICAL
            else{
                return (
                    "M" + (startX-quadrupleBondOffset) + "," + startY + "L" + (endX-quadrupleBondOffset) + "," + endY +
                    "M" + (startX-(quadrupleBondOffset/3)) + "," + startY + "L" + (endX-(quadrupleBondOffset/3)) + "," + endY +
                    "M" + (startX+(quadrupleBondOffset/3)) + "," + startY + "L" + (endX+(quadrupleBondOffset/3)) + "," + endY +
                    "M" + (startX+quadrupleBondOffset) + "," + startY + "L" + (endX+quadrupleBondOffset) + "," + endY)
            }
        }

        if (bondOrder === 1 && bondType === "forward_plane") {
            if (this.isBondHorizontal(angle)) {
                return ("M" + (startX) + "," + (startY) +
                    "L" + (endX) + "," + (endY-doubleBondOffset) +
                    "L" + (endX) + "," + (endY+doubleBondOffset) + "Z")
            }

            // DIAGONAL OR VERTICAL
            else{
                return ("M" + (startX) + "," + (startY) +
                    "L" + (endX-doubleBondOffset) + "," + (endY) +
                    "L" + (endX+doubleBondOffset) + "," + (endY) + "Z")
            }
        }
    }
}


export default Bond;