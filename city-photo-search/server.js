const express = require("express"); 
const bodyParser = require("body-parser"); 
const auth = require("./authMiddleware"); 
const cities = require('./cities.json');
const cors = require('cors');

const app = express(); 
// app.use(bodyParser()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
app.use(auth);
app.get('/search', (req, res) => {
    res.send(cities);
})

app.listen(8080, () => { console.log('Server running'); })