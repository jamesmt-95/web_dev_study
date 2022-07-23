const port = 8080;
const hostname = '127.0.0.1'

const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/register.html') //or res.sendFile('/register.html',{root:__dirname})
});


app.post('/submit_Register', (req, res) => {

    var Fname = req.body.get_fname;
    var Sname = req.body.get_sname;
    var Mob = req.body.get_mob;
    var Mail = req.body.get_mail;
    var Pass = req.body.get_pass;

    var result = 'First Name : ' + Fname + ' Last Name : ' + Sname + ' Mobile Number : ' + Mob + ' E-Mail : ' + Mob + ' Password : ' + Pass + ' ';
    res.send(JSON.stringify(result))
    // res.send(result)

});

app.listen(port, hostname, () => {
    console.log(`Server Running on ${port}`)
});