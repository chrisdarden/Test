// Requires
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require("node-fetch");

// API Key
const dotenv = require('dotenv');
dotenv.config();

const api_key = process.env.API_KEY;
console.log("API key = " + api_key);

// Create Express App
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(express.static('dist')); // Folder generated by Webpack

console.log(__dirname) // Log directory

// designates what port the app will listen to for incoming requests
app.listen(8080, function() {
    console.log('Example app listening on port 8080!')
})

app.post('/NLP', async(req, res) => {
    console.log('req.body ===+>', req.body)
    const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${api_key}&url=${req.body.formText}&lang=en`);
    try {
        const data = await response.json();
        console.log(data);
        res.send(data);
    } catch (error) {
        console.log("error", error);
    }
});