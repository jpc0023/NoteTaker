const router = require('express').Router();
const path = require('path');
const db = require('../../db/db.json');
const fs = require('fs');
const notes = require('../../db/db.json');

var note;

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../db/db.json'));
});

function createNewNote(body, notesArray) {
    const newNote = body;
    if (!notesArray) {
        var notesArray = [];
    }
    notesArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(notesArray, null, 1)
    );
    return newNote;
}

router.post('/notes', (req, res) => {
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
});

module.exports = router;