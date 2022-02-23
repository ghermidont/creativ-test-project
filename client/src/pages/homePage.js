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


        console.log("query", query);
    }, [query]);

    useEffect(() => {
        console.log("useEffect []");
        setLoading(true);
        // getAppData().then().catch(err => console.log("err", err));
        getBooksRequest().then(res => {
            setBooks(res.data);
            setLoading(false);
            console.log("getBooksRequest() res: ", res.data);
        }
        );
    }, []);

    function foundValues(obj, value) {
        value = String(value).toLowerCase();
        const asArray = obj&&Object.entries(obj);
        let filtered = asArray&&asArray.filter(o =>
            Object.entries(o).some(entry =>
                String(entry[1]).toLowerCase().includes(value)
            )
        );
        console.log("filtered", filtered);
        //return <BooksList books={filtered}/>;
        return <h1>foundValues</h1>;
    }

    return (
        <div>
            <section>
                <SearchBar query={query} setQuery={setQuery}/>
            </section>
            <section>
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    query===""?<BooksList books={books}/>:foundValues(books.books, query)
                )}
            </section>
        </div>
    );
}

export default HomePage;