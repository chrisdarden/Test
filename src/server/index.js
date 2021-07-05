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
console.log("API key =", APIKey)
    //

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

// ON Load of page, send Main view
app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
        //res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function(req, res) {
    res.send(retrieveData(fullURL))
})

// var FormData = require('form-data');

// const { response } = require('express');


// const formdata = new FormData();
// formdata.append("key", `${process.env.API_KEY}`);
// formdata.append("url", "https://www.usatoday.com/story/news/politics/2021/06/08/kamala-harris-lester-holt-interview-pushes-back-border-criticism/7600802002/");
// formdata.append("lang", "en"); // 2-letter code, like en es fr ...

// const requestOptions = {
//     method: 'POST',
//     body: { formdata },
//     redirect: 'follow'
// };
// const userURL = document.querySelector
// const fullURL = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${userURL}&lang=en`

// Retrieve the data from api
const retrieveData = async(fullURL) => {
    console.log("retrieve data");
    console.log(fullURL);
    console.log(data);

    const request = await fetch(fullURL)
        .then(response => ({
            status: response.status,
            body: response.json()
        }))
        .then(({ status, body }) => console.log(status, body))
        .then(res.send(response.json()))
        .catch(error => console.log('error', error));
};

// const response = fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${api_key}&url=${requestOptions.body}&lang=en`, requestOptions)
//     .then(response => ({
//         status: response.status,
//         body: response.json()
//     }))
//     .then(({ status, body }) => console.log(status, body))
//     .catch(error => console.log('error', error));