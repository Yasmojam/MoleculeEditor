// Atomic number should be the same as its index
import {chemElement} from "../cheminfo/chemElement";

const findAtomicNumBySymbol = (symbol: String) => {
    for (let element of chemElement) {
        if (element !== null) {
            if (element.Symbol === symbol) {
                return element.AtomicNumber;
            }
        }
    }
}

export default findAtomicNumBySymbol;