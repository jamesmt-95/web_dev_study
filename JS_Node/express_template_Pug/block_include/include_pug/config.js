const port = 8080;
const hostname = '127.0.0.1';

const express = require('express')
const app = express()

// const path = require('path')

// const bodyParser = require('body-parser')

// app.use(bodyParser.urlencoded({
//     extended: false
// }))

app.set('view engine', 'pug')
app.set('views', __dirname)


app.get('/', (req, res) => {
    res.render('main', {
        user: 'James'
    })
});

app.listen(port, hostname, () => {
    console.log(`Server Running on Port${port}`)
})