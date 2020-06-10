import React from "react";


const ToolButtons = (props) => {
    return (
        <button className="ui icon button" style={{width:"50px", height: "50px"}}>
            {props.children}
        </button>
    )
}


export default ToolButtons;