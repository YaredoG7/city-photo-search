const express = require("express"); 
const bodyParser = require("body-parser"); 
const auth = require("./authMiddleware"); 
const cities = require('./cities.json');
const cors = require('cors');
const path = require('path');

const app = express(); 
// app.use(bodyParser()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
app.use(auth);
app.use(express.static(path.join(__dirname, 'dist/city-photo-search/')));
// app.use(express.static(path.join(__dirname, '../dist/hahutimeattendance'), { index : false }));
app.get('/index/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/city-photo-search/index.html'));
  });
app.get('/search', (req, res) => {
    res.json(cities);
})

app.listen(8080, () => { console.log('Server running'); })