const router = require('express').Router();
const fs = require('fs');
const path = require('path');

// Read and write functions
const { readFromFile, writeToFile } = require('../db/db-utils');

// API Routes
router.get('/notes', (req, res) => {
    const notes = readFromFile();
    res.json(notes);
});

// Post route for new note
router.post('/notes', (req, res) => {
    const newNote = req.body;
    const notes = readFromFile();
    newNote.id = notes.length + 1;
    notes.push(newNote);
    writeToFile(notes);
    res.json(newNote);
});
 
// Delete route by id
router.delete('/notes/:id', (req, res) => {
    const notes = readFromFile();
    const updatedNotes = notes.filter((note) => note.id !== parseInt(req.params.id));
    writeToFile(updatedNotes);
    res.json({ success: true });
});

module.exports = router;