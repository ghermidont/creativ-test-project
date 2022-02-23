import React from "react";
import {FormControl, InputGroup} from "react-bootstrap";

function SearchBar(query, setQuery) {
    return (
        <InputGroup id="search-bar" className="mb-3">
            <FormControl
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
                placeholder="Search.."
                value={query}
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
            />
        </InputGroup>
    );
}

export default SearchBar;