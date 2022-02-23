import React from "react";
//import { FormControl, InputGroup, Image } from "react-bootstrap";
//import SearchIcon from "../images/SearchIcon.png";
import {  TextField, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";

function SearchBar({query, setQuery}) {
    return (
        <TextField
            id="search-bar"
            variant="outlined"
            placeholder="Search.."
            value={query}
            InputProps={{
                endAdornment: (
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                ),
            }}
        />

    // <InputGroup id="search-bar" className="mb-3">
    //     <FormControl
    //         onChange={(e) => setQuery(e.target.value)}
    //         placeholder="Search.."
    //         value={query}
    //         aria-label="Recipient's username"
    //         aria-describedby="basic-addon2"
    //     />
    //     <InputGroup.Text id="basic-addon2"><Image src={SearchIcon}/></InputGroup.Text>
    // </InputGroup>
    );
}

export default SearchBar;