import React, { useState }from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
//import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { BsFillGrid3X3GapFill, BsListUl } from "react-icons/bs";

import BookModal from "../components/BookModal";
import "./styles/list.css";

const BookCard = (bookData) => (
    <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={bookData.thumbnailURL} alt="logo"/>
        <Card.Body>
            <Card.Title>{bookData.title}</Card.Title>
            <Card.Text>
                {bookData.shortDescription}
            </Card.Text>
            <Card.Text>
                {/*{bookData.authors.[0]}*/}
            </Card.Text>
            <BookModal bookData/>
            {/*<Button variant="primary">Go somewhere</Button>*/}
        </Card.Body>
    </Card>
);

const list = (books) => (
    <ListGroup as="ol" >

        {books.books.map((b)=>
        <ListGroup.Item
            key={b.isbn}
            as="li"
            className="d-flex justify-content-between align-items-start"
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold">{b.title}</div>
                {b.shortDescription}
                {b.authors.map((a, index)=>
                    <div key={index} className="mt-2">
                        <Badge variant="secondary">{a}</Badge>
                    </div>
                )}
            </div>
            {/*<Image >*/}
            {/*    14*/}
            {/*</Image>*/}
        </ListGroup.Item>
        )}
    </ListGroup>
);

const grid = (books) => (
    <div id="cards-container">
        {books.books.map((b)=><BookCard b/>)}
    </div>
);

function BooksList({books}) {
    const [displayType, setDisplayType] = useState("grid");

    const handleListView =() => setDisplayType("list");
    const handleGridView =() => setDisplayType("grid");

    return (
        <div>
            <h1>Books list</h1>
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" onClick={handleGridView}><BsFillGrid3X3GapFill /></Button>
                <Button variant="secondary" onClick={handleListView}><BsListUl /></Button>
            </ButtonGroup>
            <section>
                {displayType === "list" ? list(books) : grid(books)}
            </section>
        </div>
    );
}

export default BooksList;