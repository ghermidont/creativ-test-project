import React, {useEffect, useState} from "react";
import Logo from "../images/book-vector.png";
import "./styles/header.css";
import {Button} from "react-bootstrap";
//import {useThemeContext} from "../context/themeContext";

function Header() {
    const [color, setColor] = useState("Light");

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
                <Button
                    id="color-toggle-button"
                    // style={{float: "right", paddingLeft: "10px"}}
                    variant="danger"
                    onClick={() => console.log("color toggler")}
                >{color}</Button>
            </section>
        </div>

    );
}

export default Header;