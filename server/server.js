const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
// Synchronously read the contents of a given directory. Returns an array with all the file names or objects in the directory.
const { readdirSync } = require("fs");

// Enable ..env files.
require("dotenv").config();

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

// routes middleware
//Read the routes directory.
readdirSync("./routes").map((route) => app.use(require("./routes/" + route)));

// port
const port = process.env.PORT;

app.listen(port, () => console.log(`The server is running on port ${port}`));