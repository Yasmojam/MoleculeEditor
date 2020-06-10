import React from "react";
import Selection from "../../assets/select.png"
import Transform from "../../assets/transform.png"
import Double from "../../assets/double bond.png";

const Header = (props) => {
    return (
        <div className='container'>
        <div style={headerStyle} className="ui header">
            <div style={{width:"100%",height:"100%", wordWrap:"break-word", wordBreak:"break-all",}}>
                <div style={{padding:"5px", width:"150px", float: "left"}}>Molecule editor.</div>
                <button className="ui icon button" style={headerButtonStyle}>
                    Export
                </button>
                <button className="ui icon button" style={headerButtonStyle}>
                    T
                </button>
                <button className="ui icon button" style={headerButtonStyle}>
                    <img className="toolIcon" src={Selection} alt="" style={iconStyle}/>
                </button>
                <button className="ui icon button" style={headerButtonStyle}>
                    <img className="toolIcon" src={Transform} alt="" style={iconStyle}/>
                </button>
                <button className="ui icon button" style={headerButtonStyle}>
                    clear
                </button>
                <button className="ui icon button" style={headerButtonStyle}>
                    erase
                </button>
                <button className="ui icon button" style={headerButtonStyle}>
                    redo
                </button>
                <button className="ui icon button" style={headerButtonStyle}>
                    undo
                </button>
                <div style={headerButtonStyle}>Tools:</div>
            </div>
        </div>
        </div>
    )
}

const headerStyle = {
    background: '#ffffff',
    padding: '12px'
}

const headerButtonStyle = {
    // width:"60px",
    height: "38px",
    fontSize:"15px",
    textAlign:"center",
    padding: "10px",
    margin:"2px",
    float: "right"
}

const iconStyle = {
    width: "16px",
    height: "16px"
}

export default Header;