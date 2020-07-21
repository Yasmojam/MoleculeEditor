import {chemElement} from "../cheminfo/chemElement";

export const atom = ( atomicNum: Number, coord: Object, associatedBonds = []) => {
    // Return atom symbol, element_valency, list of associated Bonds, current.Valency, charge}

    // Remember valency is an atoms ability to bond with another atom
    // Charge is a sum of electron and proton charges
    // covalentElectrons represents the share of electrons that atom gets from a CovalentBond
    // ie. Carbon has 4e- and requires another 4e- (covalentElectrons) to obtain nobel gas state.
    // Ionic bonding is very strong covalent bonding where share of electrons is more to one atom.
    // These rules should still hold for ionic bonding between groups

    // can be reassigned by function once atom object is created
    const charge = 0;

    const symbol = chemElement[atomicNum].Symbol;
    const element_valence = chemElement[atomicNum].NumberofValence;
    let new_valence = null;

    // Sum bondOrder of all bonds
    let covalentElectrons = 0;
    if (associatedBonds > 0){
        for (let bond of associatedBonds) {
            covalentElectrons += bond.bondOrder;
        }
    }

    // Some non-typical organic elements do not have a valency i.e transition metals
    // So best to do a check for a string element valence
    if (element_valence !== "") {
        new_valence = element_valence - covalentElectrons;
    }
    else {
        new_valence = element_valence;
    }

    return {symbol, atomicNum, coord, associatedBonds, new_valence, charge}
}

// Atomic number should be the same as its index
export const findAtomicNumBySymbol = (symbol: String) => {
    for (let element of chemElement) {
        if (element !== null) {
            if (element.Symbol === symbol) {
                return element.AtomicNumber;
            }
        }
    }
}