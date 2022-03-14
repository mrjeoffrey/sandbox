// Imports express package
const express = require("express");
// Imports file package
const path = require("path");

// Assigns package to variable to use
const app = express();

// ** Create route
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
});

// Assign port
const PORT = process.env.PORT || 5002;

// Server will runn
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
