// Establishing NPM pacakge dependencies to make note taker functional
const express = require('express');
const path = require('path');
const fs = require('fs');
const uuid = require('uuid');

// Creating express server & setting initial port 
const app = express();
const PORT = process.env.PORT || 0825;

const notes = []

// Middleware for JSON data to handle parsing when get POST request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTML Display Routes
app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "/public/notes.html")));
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "/public/index.html")));

// API Route to read db.json file & return saved notes as JSON
app.get("/api/notes", (req, res) => res.json(notes));

// (Post) API Route to save user's submitted notes and return to client
app.post("/api/notes", (req, res) => {
    const newNote = req.body    
    fs.readFile("db/db.json")

    fs.writeFile()
},

// Attempting delete functionality 
app.delete("/api/notes:id", (req,res) => {
    fs.readFile("db/db.json")
},

// Express "listener" to start the note taker server
app.listen(PORT, () => console.log()`App listening at http://localhost:${PORT}`));