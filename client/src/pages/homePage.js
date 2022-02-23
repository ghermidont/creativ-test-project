import React, { useState, useEffect } from "react";
import axios from "axios";
import BooksList from "../components/BooksList";
import { getBooksRequest } from "../httpRequests/booksRequests";

function HomePage() {
    console.log("HomePage");
    const [books, setBooks] = useState({});
    const [loading, setLoading] = useState(true);

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
        //getAppData();
        //servBooks();
        }, []);

    return (
        <div>
            {!loading&&<BooksList books={books}/>}
        </div>
    );
}

export default HomePage;