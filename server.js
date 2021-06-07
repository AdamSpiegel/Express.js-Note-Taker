// Establishing NPM pacakge dependencies to make note taker functional
const express = require('express');
const path = require('path');
const fs = require('fs');
const uuid = require('uuid');

// Creating express server & setting initial port 
const app = express();
const PORT = process.env.PORT || 0825;

// Middleware for JSON data to handle parsing when get POST request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTML Display Routes
app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "/public/notes.html")));

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "/public/index.html")));

// API Route to read db.json file & return saved notes as JSON
app.get("/api/notes", (req, res) => {
    fs.readFile("db/db.json", "utf8", (error, data) => {
        if (error) throw error
        res.json(data)
    })
});

// (Post) API Route to save user's submitted notes and return to client
app.post("/api/notes", (req, res) => {
    const newNote = req.body
    fs.readFile("db/db.json", "utf8", (error, data) => {
        if (error) throw error
        let notes = data
        notes.push(newNote)
        // Writing the data array to the db.json file
        fs.writeFile("db/db.json", data, (error) => {
            if (error)
                console.log(err);
            else {
                console.log(fs.readFileSync("db.db/json", "utf8"));
            }
        })
        res.send(res.json.newNote)
    });
});

// // Delete Notes functionality - Need to FILTER through process to remove notes - 6.5.21
// app.delete("/api/notes:id", (req, res) => {
//     fs.readFile("db/db.json", "utf8", (error, data) => {
//         if (error) throw error
//         let notes = JSON.parse(data);
//         notes.filter(newNote) (req.parm.id)
//         fs.writeFile()
//      
//     }});

// In case API Route don't function place here
// app.get("*", (req, res) => res.sendFile(path.join(__dirname, "/public/index.html")));

// Express "listener" to start the note taker server
app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));