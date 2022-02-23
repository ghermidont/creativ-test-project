import React, {useState} from "react";
import Logo from "../images/book-vector.png";
import "./styles/header.css";
import { Button } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { BsMoon, BsSun } from "react-icons/bs";
//import {useThemeContext} from "../context/themeContext";

function Header() {
    // use this for context change
    const [color, setColor] = useState("Light");

    const handleDarkTheme =() => setColor("Dark");
    const handleLightTheme =() => setColor("Light");
    // const {themes, changeTheme} = useThemeContext();

    return (
        <div id="main-container">
            <section className="mb-3" >
                <img id="logo" src={Logo} alt="logo" />
            </section>

            <section className="mb-3" >
                <h1 id="title">BOOKS</h1>
            </section>
            <section className="mb-3" >
                <ButtonGroup style={{margin: "10px 10px"}} aria-label="Basic example">
                    <Button variant="secondary" onClick={handleDarkTheme}><BsMoon /></Button>
                    <Button variant="secondary" onClick={handleLightTheme}><BsSun /></Button>
                </ButtonGroup>
            </section>
        </div>

    );
}

export default Header;