import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Badge from "react-bootstrap/Badge";

function BookModal({bookData}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button style={{marginTop: "10px"}} variant="success" className="stretched-link" onClick={handleShow}>
                View Info
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{bookData.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <section>
                        <img src={bookData.thumbnailURL} alt="logo"/>
                    </section>
                    <section>
                        {bookData.longDescription}
                    </section>

                    <section>
                    <span><strong>Authors:</strong></span>
                        {bookData.authors.map((a, index)=>
                            <div key={index} className="mt-2">
                                <Badge variant="secondary">{a}</Badge>
                            </div>
                        )}
                    </section>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default BookModal;

