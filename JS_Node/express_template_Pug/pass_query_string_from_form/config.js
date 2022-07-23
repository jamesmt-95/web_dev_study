const port = 8080
const hostname = '127.0.0.1'

const express = require('express')
const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended: true
}))

app.set('view engine', 'pug')
app.set('views', __dirname + '/pug_View')

app.get('/', (req, res) => {
    res.render('login')
})

app.post('/submit_form', (req, res) => {
    //var json = JSON.stringify(req.body)
    // var parse = JSON.parse(json)
    // console.log(parse['user_mail'])
    //req.query['user_mail]
    // res.end(`Hope you found Data -  IP:${req.ip} Orginal URL : ${req.originalUrl} Method:${req.method}`)
    let get_email = req.body.user_mail
    let get_pass = req.body.user_pass
    let split_mail = get_email.split('@')[0].toUpperCase()

    res.render('userHome', {
        user: split_mail,
        print_email: get_email,
        print_pass: get_pass
    })

    console.log(`Hope you found Data -${JSON.stringify(req.body)} from IP:${req.ip} , Orginal URL : ${req.originalUrl} , Method:${req.method}`)
    res.end()
})

app.listen(port, hostname, () => {
    console.log(`Server Running on ${port}`)
})
