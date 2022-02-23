//File contains endpoints for books related requests.
const express = require( "express" );
const router = express.Router();

const { getBooksController } = require( "../controllers/booksController" );

router.get( "/books", getBooksController );

module.exports = router;