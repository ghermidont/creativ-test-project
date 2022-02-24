import React from "react";
import {  TextField, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import { useThemeContext } from "../context/themeContext";

function SearchBar({query, setQuery}) {
    const { theme } = useThemeContext();

    return (
        <TextField
            id={`search-bar-${theme}`}
            variant="outlined"
            placeholder="Search.."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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