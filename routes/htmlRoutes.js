const router = require('express').Router();
const fs = require('fs');
const path = require('path');

// Read and write functions
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/notes.html'))
});

module.exports = router;