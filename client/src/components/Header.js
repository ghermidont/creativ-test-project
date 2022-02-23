import React, {useEffect, useState} from "react";
import Logo from "../images/book-vector.png";
import "./styles/header.css";
import {InputGroup, FormControl, Button} from "react-bootstrap";
//import {useThemeContext} from "../context/themeContext";

function Header() {
    const [color, setColor] = useState("Light");
    const [query, setQuery] = useState("");

   // const {themes, changeTheme} = useThemeContext();

    useEffect(() => {
    //     const searchResult = books.filter( (book) => book.title.includes("Jeep"))
    //     setBooks(searchResult);
        console.log("query", query);
    }, [query]);

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

                <InputGroup id="search-bar" className="mb-3">
                        <FormControl
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search.."
                            value={query}
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                    </InputGroup>
            </section>
        </div>

    );
}

export default Header;