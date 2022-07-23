const port = 8080;
const hostname = '127.0.0.1';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


app.use(bodyParser.urlencoded({
    extended: false
}))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/login.html'))
});


app.post('/submit_login', (req, res) => {

    get_Login = (x, y) => {
        if ((x == 'jamesmanjada@gmail.com') && (y == 'jamesmanjada7')) {

            res.sendFile(path.join(__dirname + '/home.html'))
        } else {
            res.sendFile(path.join(__dirname + '/error.html'))
        }
    }
    var mail = req.body.user_mail;
    var pass = req.body.user_pass;
    get_Login(mail, pass)
});

app.listen(port, hostname, () => {
    console.log(`Server Running on ${port}`)
})