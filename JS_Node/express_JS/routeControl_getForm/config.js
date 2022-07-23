const port = 8080;
const hostname = '127.0.0.1';
const express = require('express');
const bodyParser = require('body-parser');
/*
To handle HTTP POST request in Express.js version 4 and above, you need to install middleware module called body-parser.
body-parser extract the entire body portion of an incoming request stream and exposes it on req.body.
*/
const app = express();
/*
Once the Request is Made,
app.use((req, res, next) => {
    console.log(`Request Accespted @ ${Date(Date.now())}`);
    next();
}, (req, res, next) => {
    console.log(`Orginal URL : ${req.originalUrl} & Method : ${req.method}`);
    next();
});
*/
app.use(bodyParser.urlencoded({
    extended: false
}))
/*
If extended is false, you can not post "nested object"
person[name] = 'James'
Nested Object = { person: { name: James } }
*/

app.get('/', (req, res) => {
    // res.send('Welcome');
    res.sendFile(__dirname + '/index.html') //or res.sendFile('/index.html', { root: __dirname });
    //console.log(`__dirname:${__dirname}`) will return the path of file without '/' so in the sendFile , should add /
});

app.post('/submit_formData', (req, res) => {

    // const name = req.body.first_val + ' ' + req.body.second_val;
    // res.send(`Welcome User,  ${name}`);
    findSum = (x, y) => {
        //var result = eval('x + y');
        var result = Number(x) + Number(y)
        return result;
    }
    findName = (x, y) => {
        //var result = num1 + num2;
        var fullname = x + ' ' + y;
        return fullname;

    }
    var val1 = req.body.first_val;
    var val2 = req.body.second_val;

    //var result = findSum(val1, val2)
    var result = findName(val1, val2)

    res.send(`Addition Result : ${result}`);
});

app.listen(port, hostname, () => {
    console.log(`Server Running on Port:${port}`)
});