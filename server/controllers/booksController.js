const axios = require("axios");

exports.getBooksController = async ( req, res ) => {
    console.log( "getBooksController" );
    const books = await axios.get("https://riabooksapi.azurewebsites.net/books")
        .then(data => res.send(data.data))
        .catch(err => res.send(err));
    console.log("getBooksController() books: ", books);
};