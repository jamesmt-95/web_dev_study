const port = 8080
const hostname = '127.0.0.1'

const express = require('express')
const app = express()

const bodyParser = require('body-parser')

const path = require('path')

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(express.static('./source'))

app.set('view engine', 'pug')
app.set('views', __dirname)

app.get('/', (req, res) => {
    res.render('index')

});

app.listen(port, hostname, () => {
    console.log(`Server Running @\
    0 Port :${port}`)
})