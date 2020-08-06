import {chemElement} from "../cheminfo/chemElement";

/**
 * Class which represents an Atom
 * */
export default class Atom {
    constructor(atomicNum: Number,
                coord: Object,
    )
    {
        this._symbol = chemElement[atomicNum].Symbol;
        this._atomicNum = atomicNum;
        this._coord = coord;
    }

    get atomicNum(): Number {
        return this._atomicNum;
    }

    set atomicNum(value: Number) {
        this._atomicNum = value;
    }

    get coord(): Object {
        return this._coord;
    }

    set coord(value: Object) {
        this._coord = value;
    }

    get symbol() {
        return this._symbol;
    }

    set symbol(value) {
        this._symbol = value;
    }
}

