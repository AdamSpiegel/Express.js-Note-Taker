// Establishing NPM pacakge dependencies to make note taker functional
const express = require('express');
const path = require('path');
const fs = require('fs');
const uniqid = require('uniqid');

// Creating express server & setting initial port 
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for JSON data to handle parsing when get POST request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// HTML Display Routes
app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "/public/notes.html")));
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/public/index.html")));

// API Route to read db.json file & return saved notes as JSON
app.get("/api/notes", (req, res) => {
    fs.readFile("db/db.json", "utf8", (error, data) => {
        if (error) {
            console.error(error)
        } else {
            res.send(data);
        }
    })
});

// (Post) API Route to save user's submitted notes and return to client
app.post("/api/notes", (req, res) => {
    fs.readFile("db/db.json", "utf8", (error, data) => {
        if (error) {
            console.error(error)
        }
        else {
            let notes = JSON.parse(data);
            console.log(notes);
            const newNote = req.body
            newNote.id = uniqid();
            notes.push(newNote);
            fs.writeFile("db/db.json", JSON.stringify(notes), (err) =>
                err ? console.error(err) : console.log('New Note Saved'))
            res.send(newNote);
        };
    })

});

// // Delete Notes functionality - FILTERS through user's submitted data (through JSON parsing) to process and remove notes 
app.delete("/api/notes/:id", (req, res) => {
    fs.readFile("db/db.json", "utf8", (error, data) => {
        if (error) {
            console.error(error);
        }
        else {
            let notes = JSON.parse(data);
            notes = notes.filter(e => e.id != req.params.id)
            fs.writeFile("db/db.json", JSON.stringify(notes), (err) =>
                err ? console.error(err) : console.log('Note Deleted'))
            res.send({});
        }
    })
})

// Express "listener" to start the note taker server
app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));