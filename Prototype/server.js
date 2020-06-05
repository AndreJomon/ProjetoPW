const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const lineStatus = require('./lineStatus.js');
const stationList = require('./stationList.js');
const secrets = require('./secrets.json')

let app = express();

const STATIC_DIR = path.join(__dirname, 'public');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(STATIC_DIR));

app.get('/lines.json', (req, res) => {
    lineStatus().then(data => res.json(data));
});

app.get('/stations.json', (req, res) => {
    stationList().then(data => res.json(data));
});

app.get('/secrets.json', (req, res) => {
    res.json(secrets);
});

app.get('*', function(req, res) {
    res.sendFile(path.join(STATIC_DIR, 'index.html'));
});

app.listen(3000, () => {
    console.log("PW server listening on port 3000!")
});