import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import BookModal from "./BookModal";

function BookCard({bookData}) {
       return(
           <Card style={{ width: "18rem", padding: "10px 10px", marginBottom: "10px"}}>
            <Card.Img variant="top" src={bookData.thumbnailURL} alt="logo"/>
            <Card.Body>
                <Card.Title>{bookData.title}</Card.Title>
                <Card.Text>
                    <strong>Authors:</strong>
                    {bookData.authors.map((a, index)=>
                        <div key={index} className="mt-2">
                            <ul>
                                <li style={{padding: "5px 20px 5px 0"}}>{a}</li>
                            </ul>
                        </div>
                    )}
                </Card.Text>
                <Card.Text>
                    <strong>Category:</strong>
                    {bookData.categories.map((c, index)=>
                        <div key={index} className="mt-2">
                            <Badge variant="secondary">{c}</Badge>
                        </div>
                    )}
                </Card.Text>
                <BookModal bookData={bookData}/>
            </Card.Body>
        </Card>
       );
}

export default BookCard;