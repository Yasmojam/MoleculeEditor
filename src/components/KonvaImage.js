import React from "react";
import {Image} from "react-konva";
import useImage from "use-image";


const KonvaImage = (props) => {
    const {url, ...others} = props;
    const [image] = useImage(url);
    return <Image image={image} {...others} />;
};

export default KonvaImage;