const port = 8080;
const hostname = '127.0.0.1';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({
    extended: false
}))

app.set('view engine', 'pug')
app.set('views', './conv_Pug')
// app.set('views', __dirname + '/conv_Pug');

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname + '/login.html'))
    res.render('index1');
});

app.listen(port, hostname, () => {
    console.log(`Server Running on ${port}`)
})