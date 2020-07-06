import React, {useEffect} from "react";
import Vectors from "./assets/Vectors";
import DrawingArea from "./DrawingArea";
import {useSelectedTool} from "../ToolContexProvider";
import HeaderButton, {headerButtonStyle} from "./HeaderButton";

const Header = (props) => {
    const toolContext = useSelectedTool();

    const clickHandler = (tool) => {
        toolContext.setTool(tool);

        console.log("button clicked")
    }

    return (
            <div style={headerStyle} className="ui header">
                <div className="content" style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100%",
                    height: "100%",
                    wordWrap: "break-word",
                    wordBreak: "break-all",
                    justifyContent: "space-between"
                }}>
                    <div style={{
                        display: "flex",
                        position:"relative",
                        margin: "10px",
                        maxHeight:"auto",
                        minWidth:"65px",
                        justifyContent: "flex-start",
                    }}>Molecule editor.
                    </div>
                    <div className="content" style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems:"center",
                    }}>
                        <div style={headerButtonStyle}>Tools:</div>
                        <HeaderButton tool="undo">
                            undo
                        </HeaderButton>
                        <HeaderButton tool="redo">
                            redo
                        </HeaderButton>
                        <HeaderButton tool="erase">
                            erase
                        </HeaderButton>
                        <HeaderButton tool="clear">
                            clear
                        </HeaderButton>
                        <HeaderButton tool="transform">
                            <img className="toolIcon" src={Vectors.transform} alt="" style={iconStyle}/>
                        </HeaderButton>
                        <HeaderButton tool="selection">
                            <img className="toolIcon" src={Vectors.selection} alt="" style={iconStyle}/>
                        </HeaderButton>
                        <HeaderButton tool="T">
                            T
                        </HeaderButton>
                        <HeaderButton tool="export">
                            Export
                        </HeaderButton>


                </div>
            </div>
        </div>
    )
}

const headerStyle = {
    background: '#ffffff',
    padding: '10px',
    borderBottom:"2px solid #707070"
}

const iconStyle = {
    width: "16px",
    height: "16px"
}


export default Header;