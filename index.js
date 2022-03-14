// Imports express package
const express = require("express");
// ** Imports path package
const path = require("path");

// Assigns package to variable to use
const app = express();

// ** Set static folder **
app.use(express.static(path.join(__dirname, "public")));

// Assign port
const PORT = process.env.PORT || 5002;

// Server will runn
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
