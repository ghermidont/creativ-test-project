import React, {useState} from "react";
import {  TextField, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import { useThemeContext } from "../context/themeContext";

function SearchBar({query, setQuery}) {
    const { theme } = useThemeContext();
    const [error, setError] = useState("");
    const [label, setLabel] = useState("Search");

const validator = (e) => {
    //Regex for validating the input
    if (e.target.value.match("^[a-zA-Z0-9_.-]*$")) {
        setError("");
        setLabel("Search");
        setQuery(e.target.value);
    } else {
        setError("Invalid input.");
        setLabel("Error");
    }
};

    return (
        <TextField
            error={error.length!==0}
            id={`search-bar-${theme}`}
            variant="outlined"
            placeholder="use only letters and numbers"
            label={label}
            value={query}
            helperText={error}
            onChange={(e) => validator(e)}
            InputProps={{
                endAdornment: (
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                ),
            }}
        />
    );
}

export default SearchBar;