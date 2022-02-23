import React, { useState }from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BookCard from "./BookCard";
import { BsFillGrid3X3GapFill, BsListUl } from "react-icons/bs";

import BookModal from "../components/BookModal";
import "./styles/list.css";

//List view component
const listView = (books) => (
    <ListGroup className="shadow" as="ol" style={{margin: "10px 10px"}}>
        {books.map((b)=>
            <ListGroup.Item
                key={b.isbn}
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <Container>
                    <Row>
                        <Col><strong style={{fontSize: "25px"}}>{b.title}</strong></Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src={b.thumbnailURL} alt="logo"/>
                        </Col>
                        <Col xs={5}> <strong>Authors:</strong>
                            {b.authors.map((a, index)=>
                                <div key={index} className="mt-2">
                                    <ul>
                                        <li style={{padding: "5px 20px 5px 0"}}>{a}</li>
                                    </ul>
                                </div>
                            )}
                        </Col>
                        <Col> <strong>Category:</strong>
                            {b.categories.map((c, index)=>
                                <div key={index} className="mt-2">
                                    <Badge variant="secondary">{c}</Badge>
                                </div>
                            )}
                        </Col>
                        <Col>
                            <BookModal bookData={b}/>
                        </Col>
                    </Row>
                </Container>
            </ListGroup.Item>
        )}
    </ListGroup>
);

//Grid view component
const gridView = (books) => (
    <div id="cards-container">
        {books.map((b)=><BookCard bookData={b}/>)}
    </div>
);

function BooksList({books}) {
    const [displayType, setDisplayType] = useState("grid");

    const handleListView =() => setDisplayType("list");
    const handleGridView =() => setDisplayType("grid");

    return (
        <div>
            <h1>Books list</h1>
            <ButtonGroup style={{margin: "10px 10px"}} aria-label="Basic example">
                <Button variant="secondary" onClick={handleGridView}><BsFillGrid3X3GapFill /></Button>
                <Button variant="secondary" onClick={handleListView}><BsListUl /></Button>
            </ButtonGroup>
            <section>
                {displayType === "list" ? listView(books) : gridView(books)}
            </section>
        </div>
    );
}

export default BooksList;