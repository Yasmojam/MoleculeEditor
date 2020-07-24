import React from "react";
import Vectors from "./assets/Vectors";
import HeaderButton from "./HeaderButton";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = (props) => {
    return (
            <Navbar bg="white" expand="md"
                    style={{
                        justifyContent: "space-around",
                        borderBottom:"2px solid #707070",
                        padding: "0.1rem"}}>
                <Navbar.Brand href="#">Molecule editor.</Navbar.Brand>
                <Navbar style={{flexWrap: "wrap", justifyContent: "center"}}>
                    <Navbar.Text style={{margin:"0.5rem", color:"black"}}>Tools:</Navbar.Text>
                    <div className="headerButtonHolder" style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
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
                    </div>
                </Navbar>
        </Navbar>
    )
}

const iconStyle = {
    width: "16px",
    height: "16px"
}


export default Header;