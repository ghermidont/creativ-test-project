import React from "react";
import "./styles/footer.css";
import { useThemeContext } from "../context/themeContext";

function Footer() {
    const { theme } = useThemeContext();
    const color = theme==="Dark"?{background: "#282828"}: {background: "#950740"};
    return (
        <footer style={color} id="footer">
            <p>Name company © 2021</p>
        </footer>
    );
}

export default Footer;