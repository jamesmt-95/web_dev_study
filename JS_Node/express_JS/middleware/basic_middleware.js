const port = 8080;
const hostname = '127.0.0.1';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


app.use(bodyParser.urlencoded({
    extended: false
}));

app.use((req, res, next) => {
    res.send(`Request Generated at ${Date(Date.now())}`)
    next();
});


app.get('/', (req, res) => {
    // res.send(`Request received at app.get `)
    console.log(`Request received at app.get `)
});
/*
This will not called beacuse consequence from above and  doesnt call next()
app.get('/', (req, res) => { 
    // res.send(`Request received at app.get `)
    console.log(`Request received at app.get `)
});
*/

app.listen(port, hostname, () => {
    console.log(`Server Running on ${port}`)
})