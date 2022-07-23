const port = 8080;
const hostname = '127.0.0.1';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({
    extended: false
}));

//Important thing is -> order of Writing middleware, each call is based on order . u can use app.get() with next as a middleware

app.get('/b', (req, res, next) => {
    // res.send(`Request received at app.get `)
    console.log(`Second`)
    next();
});

app.use('*', (req, res, next) => {
    console.log(`First`)
    next();
});

app.use('*', (req, res, next) => {
    console.log(`Third`)
});

app.listen(port, hostname, () => {
    console.log(`Server Running on ${port}`)
})