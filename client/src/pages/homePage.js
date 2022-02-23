import React, { useState, useEffect } from "react";
import BooksList from "../components/BooksList";
import { getBooksRequest } from "../httpRequests/booksRequests";
import SearchBar from "../components/SearchBar";

function HomePage() {
    console.log("HomePage");
    const [books, setBooks] = useState({});
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("");

    useEffect(() => {
        //     const searchResult = books.filter( (book) => book.title.includes("Jeep"))
        //     setBooks(searchResult);
        console.log("query", query);
    }, [query]);

    useEffect(() => {
        console.log("useEffect []");
        setLoading(true);
        // getAppData().then().catch(err => console.log("err", err));
        getBooksRequest().then(res => {
            setBooks(res.data);
            setLoading(false);
            console.log("getBooksRequest() res: ", typeof res.data);
            setBooks(res.data);
            setLoading(false);
        }
        );
    }, []);

    function foundValues(arr, value) {
        value = String(value).toLowerCase();
        let filtered = arr.filter(o =>
            Object.entries(o).some(entry =>
                String(entry[1]).toLowerCase().includes(value)
            )
        );
        return <BooksList books={filtered}/>;
    }

    return (
        <div>
            <SearchBar query={query} setQuery={setQuery}/>

            {!loading&&query!==""?<BooksList books={books}/>:foundValues(books.books, query)}
        </div>
    );
}

export default HomePage;