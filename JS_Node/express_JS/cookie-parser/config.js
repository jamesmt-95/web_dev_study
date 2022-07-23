const port = 8080
const hostname = '127.0.0.1'

const express = require('express');
// const session = require('express-session'); using cookie-parser instead
const cookieParser = require('cookie-parser')
// cookie-parser is a middleware which parses cookies attached to the client request object.
const bodyParser = require('body-parser');
const app = express();

//app.use(express.static('./views'))

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieParser())


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/get_cookie.html')
});


app.post('/set_User/Cookie', function (req, res) {
    console.log(JSON.stringify(req.body))
    let get_user = req.body.user;
    //res.cookie('key','value',{maxAge:120000})   {maxAge:120000} is optional

    //res.cookie -> syntax is same as express-session (cookie)
    res.cookie('Username', get_user, {
        path: '/',
        secure: false,
        httpOnly: true,
        maxAge: 360000
    }).send(`Cookie Set as Username with ${get_user}`)
    /*
    to fetch cookie value ----
    * console.log(req.cookies['key'])
    * console.log('Cookies: ', req.cookies);
    */
    console.log('Cookies: ', req.cookies['Username'])
    // console.log('Cookies: ', req.cookies) or console.log(req.cookies['Username'])

})


app.post('/set_User/ClearCookie', function (req, res) {
    // console.log(JSON.stringify(req.body))
    // let get_user = req.body.user;
    //res.clearCookie('Username') to clear cookie
    if (res.clearCookie('Username')) {
        res.send('true')
    }



})



app.listen(port, hostname, function () {
    console.log("App Started on PORT:" + port);
});