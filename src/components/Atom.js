import React, {Component} from 'react';
import {Image} from "react-konva";
import useImage from "use-image";
import Vectors from "./layout/assets/Vectors";

const Atom = () => {
    return <Image image={Vectors.benzene} />
};

export default Atom