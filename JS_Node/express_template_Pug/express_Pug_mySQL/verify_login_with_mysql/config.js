const port = 8070;
const hostname = '127.0.0.1';
const con = require('./db_export').conn_string()
const path = require('path');
const express = require('express');
const app = express();
//call require('express-session')   or storing user session
/*
Express 4.16+
Starting with release 4.16.0, a new express.json() middleware is available.
So we can use 
____________________
app.use(express.json()) and app.use(express.urlencoded({extended:false|true})) instead of bodyparser*
*/
//const bodyParser = require('body-parser');
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
//app.use(session({secret:'key',resave:true,saveUninitialized:true,cookie:{path:'/',httpOnly:true,secure:false,}}))
//or cookie 
/* app.use(cookieParser())
innside the req 
res.cookie('cooie name, value,{
    path:
    httpOny:
    secure
    maxAge:
}).send()....

req.cookie['cookie_name] to access
*/
//app.set()


con.connect((err) => {
    if (err) console.log(`Error! While Connecting to Database ${err}`)
    else {
        console.log(`Connected to Database..`)

        config_table = (x) => {
            const query1 = 'create table if not exists User_Log (ID int primary key not null auto_increment, user_mail varchar(30) not null , user_password varchar(30) not null)'
            x.query(query1, (err, res) => {
                if (err) console.log(`Error!! While Creating Table ${err}`)
                else {
                    console.log(`Table Created ${JSON.stringify(res)}`)
                    console.log(`Inserting Data....`)
                    const query2 = 'insert into User_Log(user_mail,user_password) values ?'
                    let log_data = [
                        ['jamesmanjada@gmail.com', 'jamesmanjada7@manjada'],
                        ['jobinmanjada@gmail.com', 'jobinanjada']
                    ];
                    x.query(query2, [log_data], (err, res) => {
                        if (err) console.log(`Error! While Inserting Data`)
                        else console.log(`${res.affectedRows} Rows of Data Inserted`)
                    })

                }

            })
        }

        //config_table(con)
    }
})


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

app.post('/submit_data_form', (req, res) => {
    //console.log(`Request @ ${Date(Date.now())}  Data: ${JSON.stringify(req.body)}`)

    let get_mail = req.body['U_mail'] //or req.body.U_mail
    let get_pass = req.body['U_pass']


    verify_user = (mail, pass, conn, resp) => {
        let query = "select * from User_Log where user_mail='" + mail + "' and user_password='" + pass + "' and ID > 0"
        //one type of query => select * from User_Log where user_mail=? and user_password=? and ID>0
        //then in the con.query(query,[mail,pass]) //as an array passing values from user ans mail
        conn.query(query, (err, res) => {
            if (err) console.log(`Error! While Fetching User Log's ${err}`)
            else {
                if (res.length > 0) {
                    //console.log(`${res.length} Row Found`)
                    //set cookie/session
                    resp.send('Found') //here we can use res.redirect('/path') but now i used location = '' from ajax success
                } else {
                    //console.log(`Invalid Credential... No User`)
                    resp.send('No')
                }
                
            }
        })
    }
    verify_user(get_mail, get_pass, con, res)
})

app.get('/user_valid_redirect_user', (req, res) => {
    //console.log(`User Exist`)
    res.sendFile(__dirname + '/home.html')
})
app.get('/user_invalid_redirect_user', (req, res) => {
    //console.log(`User Does'nt Exists`)
    res.sendFile(__dirname + '/error.html')
})

app.all('*', (req, res) => {
    //res.send('Not Valid')
    res.sendFile(__dirname + '/error.html')

})

app.listen(port, hostname, () => {
    console.log(`Server Running on ${port}`)
})