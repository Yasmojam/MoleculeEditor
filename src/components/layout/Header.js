import React from "react";
import Vectors from "./assets/Vectors";
import HeaderButton, {headerButtonStyle} from "./HeaderButton";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = (props) => {
    return (
            <Navbar bg="white" expand="md"
                    style={{
                        justifyContent: "space-between",
                        borderBottom:"2px solid #707070"}}>
                <Navbar.Brand href="#">Molecule editor.</Navbar.Brand>
                <Navbar>
                    <Navbar.Text style={{margin:"0.5rem"}}>Tools:</Navbar.Text>
                        <Nav.Item>
                        <HeaderButton tool="undo">
                            undo
                        </HeaderButton>
                        </Nav.Item>
                        <Nav.Item>
                        <HeaderButton tool="redo">
                            redo
                        </HeaderButton>
                        </Nav.Item>
                        <Nav.Item>
                        <HeaderButton tool="erase">
                            erase
                        </HeaderButton>
                        </Nav.Item>
                        <Nav.Item>
                        <HeaderButton tool="clear">
                            clear
                        </HeaderButton>
                        </Nav.Item>
                        <Nav.Item>
                        <HeaderButton tool="transform">
                            <img className="toolIcon" src={Vectors.transform} alt="" style={iconStyle}/>
                        </HeaderButton>
                        </Nav.Item>
                        <Nav.Item>
                        <HeaderButton tool="selection">
                            <img className="toolIcon" src={Vectors.selection} alt="" style={iconStyle}/>
                        </HeaderButton>
                        </Nav.Item>
                        <Nav.Item>
                        <HeaderButton tool="T">
                            T
                        </HeaderButton>
                        </Nav.Item>
                        <Nav.Item>
                        <HeaderButton tool="export">
                            Export
                        </HeaderButton>
                        </Nav.Item>
            </Navbar>
        </Navbar>
    )
}

const headerStyle = {
    background: '#ffffff',
    padding: '10px',
    borderBottom:"2px solid #707070",

    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
    wordWrap: "break-word",
    wordBreak: "break-all",
    justifyContent: "space-between"
}

const iconStyle = {
    width: "16px",
    height: "16px"
}


export default Header;