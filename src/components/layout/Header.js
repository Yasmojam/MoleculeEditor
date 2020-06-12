import React from "react";
import Selection from "../../assets/select.png"
import Transform from "../../assets/transform.png"

const Header = (props) => {
    return (
            <div className="header container" style={headerStyle} className="ui header">
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
                        width: "10vw",
                        justifyContent: "flex-start",
                    }}>Molecule editor.
                    </div>
                    <div className="content" style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems:"center",
                    }}>
                        <text style={headerButtonStyle}>Tools:</text>
                        <button className="ui icon button" style={headerButtonStyle}>
                            undo
                        </button>
                        <button className="ui icon button" style={headerButtonStyle}>
                            redo
                        </button>
                        <button className="ui icon button" style={headerButtonStyle}>
                            erase
                        </button>
                        <button className="ui icon button" style={headerButtonStyle}>
                            clear
                        </button>
                        <button className="ui icon button" style={headerButtonStyle}>
                            <img className="toolIcon" src={Transform} alt="" style={iconStyle}/>
                        </button>
                        <button className="ui icon button" style={headerButtonStyle}>
                            <img className="toolIcon" src={Selection} alt="" style={iconStyle}/>
                        </button>
                        <button className="ui icon button" style={headerButtonStyle}>
                            T
                        </button>
                        <button className="ui icon button" style={headerButtonStyle}>
                            Export
                        </button>


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

const headerButtonStyle = {
    display:"flex",
    height: "38px",
    fontSize: "15px",
    textAlign: "center",
    padding: "10px",
    margin: "2px",
    float: "right",
    position: "relative",


    overflow:"auto",
    justifyContent: "space-between",
    alignItems: "center"
}

const iconStyle = {
    width: "16px",
    height: "16px"
}


export default Header;