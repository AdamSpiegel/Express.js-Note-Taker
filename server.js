// Establishing NPM pacakge dependencies to make note taker functional
const express = require('express');
const path = require ('path')
const fs = require ('fs')

// Creating express server
const app = express();

// Setting initial port for note taker user
var PORT = process.env.PORT || 0825;

// Middleware for JSON data to handle parsing when get POST request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTML Display Routes

app.get("/notes", (req,res) => res.sendFile(path.join(__dirname, "public/notes.html"),

app.get("*", (req,res) => res.sendFile(path.join(__dirname, "public/index.html")


// API Route to read db.json file & return saved notes as JSON
app.get

// (Post) API Route to save user's submitted notes and return to client
app.post





// Choose one - Express "listener" to start the note taker server
app.listen(PORT, () => console.log(`Note taker listening on PORT ${PORT}`));

app.listen(PORT, function() {
    console.log (`App listening at http://localhost:${PORT}`);
});