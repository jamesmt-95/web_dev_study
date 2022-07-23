const express = require('express')
const app = express()
const port = 8080
const hostname = '127.0.0.1'

//Single URL Param
// app.get('/:id', (req, res) => {
//     res.send(`Your ID is ${req.params.id} at ${Date(Date(Date.now()))}`);
// });

//Multi URL Param
// app.get('/user/:id/:name', (req, res) => {
//     res.send(`Your  Name is ${req.params.name} ID is ${req.params.id}. Logged at  ${Date(Date(Date.now()))}`);
// });

//Pattern Matched Route[ Using Regex]
app.get('/user/:id([0-9]{5})/:name([A-Za-z]{5,10})', (req, res) => {
    res.send(`Your  Name is ${req.params.name} ID is ${req.params.id}. Logged at  ${Date(Date(Date.now()))}`);
});


app.listen(port, hostname, () => {
    console.log(`Server running on Port ${port}`)
});