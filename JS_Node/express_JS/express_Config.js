const port = 8080;
const hostname = '127.0.0.1';
const express = require('express');
const app = express();

const server = app.get('/', (req, res) => {
    res.send('Welcome'); //res.write('Welcome);
});

server.listen(port, hostname, () => {
    console.log(`Server Running on Port:${port}`)
    console.log(process.env)
});


// app.get('/', (req, res) => {
//     res.send('Welcome'); //res.write('Welcome);
// });

// app.listen(port, hostname, () => {
//     console.log(`Server Running on Port:${port}`)
// });