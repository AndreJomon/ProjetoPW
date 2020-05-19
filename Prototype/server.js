const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const lineStatus = require('./lineStatus.js');

let app = express();

const STATIC_DIR = path.join(__dirname, 'public');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(STATIC_DIR));

app.get('/lines.json', (req, res) => {
    res.json(lineStatus());
});

app.get('*', function(req, res) {
    res.sendFile(path.join(STATIC_DIR, 'index.html'));
});

app.listen(3000, () => {
    console.log("PW server listening on port 3000!")
});