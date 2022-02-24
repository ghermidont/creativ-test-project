import React from "react";
import "./styles/footer.css";
import { useThemeContext } from "../context/themeContext";

function Footer() {
    const { theme } = useThemeContext();

    return (
        <footer id={`footer-${theme}`}>
            <p id={`footer-text-${theme}`}>Name company © 2021</p>
        </footer>
    );}

export default Footer;