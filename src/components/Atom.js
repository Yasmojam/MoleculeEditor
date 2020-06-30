import React, {Component} from 'react';
import {Image} from "react-konva";
import Vectors from "./layout/assets/Vectors";
import KonvaImage from "./KonvaImage";

const Atom = () => {
    return(<KonvaImage image={Vectors.benzene}/>)
};

export default Atom