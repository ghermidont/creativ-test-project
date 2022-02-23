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
        console.log("foundValues obj: ", obj);
        value = String(value).toLowerCase();
        console.log("foundValues value: ", value);
        //const asArray = obj&&Object.entries(obj);
        console.log("Object.entries(obj): ", Object.entries(obj));
        let test = Object
            .entries(obj)
            .filter(o=> String(Object.values(o[1])).toLowerCase().includes(value)
            );

        console.log("test: ", test);

        let objArray = [];

        test.map(i=> objArray.push(i[1]));

        console.log("objArray: ", objArray);

        return <BooksList books={objArray}/>;
       // return <h1>hello</h1>;
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
                    query===""?<BooksList books={books.books}/>:foundValues(books.books, query)
                )}
            </section>
        </div>
    );
}

export default HomePage;