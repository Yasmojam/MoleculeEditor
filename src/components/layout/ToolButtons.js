import React from "react";
import {useSelectedTool} from "../ToolContexProvider";
import Button from "react-bootstrap/Button";

const ToolButtons = (props) => {
    const toolContext = useSelectedTool();

    const clickHandler = (tool) => {
        toolContext.setTool(tool);

        console.log("button clicked")
    }

    //DEBUGGING
    // useEffect(() =>{
    //     console.log("selected tool:" + toolContext.tool);
    //     },[toolContext.tool]
    // )

    return (
        <Button variant="outline-secondary"
                tool={props.tool}
                style={{display: "flex", justifyContent: "center", alignItems:"center", width: "3rem", height: "3rem", margin: "0.1rem",  border:"1px solid #707070"}}
                onClick={() => {clickHandler(props.tool)}}>
            {props.children}
        </Button>
    )
}


export default ToolButtons;