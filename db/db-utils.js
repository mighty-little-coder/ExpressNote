// GLOBAL VARIABLES & REQUIRES
const fs = require('fs');
const path = require('path');

const dbFilePath = path.join(__dirname, 'db.json');

// Function to read from db.json
const readFromFile = () => {
    const data = fs.readFileSync(dbFilePath, 'utf8');
    return JSON.parse(data);
};
  
// Function to write to db.json
const writeToFile = (data) => {
    fs.writeFileSync(dbFilePath, JSON.stringify(data), 'utf8');
};
  
module.exports = { readFromFile, writeToFile };