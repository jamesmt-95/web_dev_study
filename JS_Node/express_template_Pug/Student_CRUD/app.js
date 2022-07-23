const hostname = 'localhost'
const port = 8080
let express = require('express')
let app = express()
let con = require('./db_export').conn_exp()

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
app.use(express.static('./public'))


app.set('view engine', 'pug')
app.set('views', __dirname + '/views')

con.connect((err) => {
    if (err) console.log(`Error While connecting to Database!! ${err}`)
    else {
        console.log(`Connected to Database.....`)
        config_table = () => {
            let query1 = 'create table if not exists Employee(emp_no int primary key auto_increment, emp_name varchar(15) not null, emp_sex varchar(5) not null, emp_age int not null, emp_desg varchar(25), status int not null)'
            con.query(query1, (err, res) => {
                if (err) console.log(`Error!! while Creating Table ${err}`)
                else {
                    console.log(`Success! Table Created`)
                    console.log(`Inserting Data.....`)
                    let query2 = 'insert into Employee(emp_name,emp_sex,emp_age,emp_desg,status) values ?'
                    let emp_data = [
                        ['James', 'Male', 23, 'Software Engineer', 1],
                        ['Jerome', 'Male', 24, 'System Analyst', 1],
                        ['Stephy', 'Female', 26, 'Program Analyst', 1],
                        ['Simon', 'Male', 25, 'Project Lead', 1],
                        ['Jacob', 'Male', 28, 'Project Manager', 1],
                        ['Sijo', 'Male', 24, 'Programmer Analyst', 1],
                        ['Steve', 'Male', 25, 'Sr.Software Engineer', 1],
                        ['Irene', 'Female', 19, 'Trainee Engineer', 1],
                        ['Thomas', 'Male', 20, 'Trainee Engineer', 1],
                        ['Ananathu', 'Male', 21, 'Trainee Engineer', 1]
                    ];
                    con.query(query2, [emp_data], (err, res) => {
                        if (err) console.log(`Error!! While Inserting data ${err}`)
                        else {
                            console.log(`Success!! Data Inserted`)
                        }

                    })
                }
            })
        }
        //config_table()
    }
})
app.get('/', (req, res) => {

    get_data = (connection, response) => {
        let query3 = 'select * from Employee where emp_no > 0 and status=1'
        connection.query(query3, (err, res) => {
            if (err) console.log(`Error! While Fetching Data ${err}`)
            else {
                //console.log(JSON.stringify(res))
                response.render('student_view', {
                    data: res
                })

            }

        })
    }
    get_data(con, res)

})


app.get('/edit', (err, res) => {

    get_editData = (connection, response) => {
        let query4 = 'select * from Employee where emp_no > 0 and status=1'
        connection.query(query4, (err, res) => {
            if (err) console.log(`Error! While Fetching Data ${err}`)
            else {
                //console.log(JSON.stringify(res))
                response.render('edit_Menu', {
                    data: res
                })

            }
        })
    }
    get_editData(con, res)

})

app.post('/edit/employee', (req, res) => {
    //console.log(JSON.stringify(req.body))
    let e_id = req.body.emp_id //req.body['emp_id] if Orginal data is converted to JSON
    //let e_name = req.body.emp_name
    // console.log(req.url)
    //console.log(`User:${e_id}`)
    get_emp_forEdit = (connection, response) => {
        //let query5 = "select * from Employee where emp_no ='" + x + "'  & emp_name ='" + y + "' & status=1"
        let query5 = 'SELECT * FROM Employee WHERE emp_no=' + e_id + ' and status=1'
        //let query5 = "select * from Employee where emp_no=" +  + "& status =1"
        connection.query(query5, (err, res) => {
            if (err) console.log(`Error! While Fetching Data ${err}`)
            else {
                
                console.log(JSON.stringify(res))
                let id = res[0].emp_no
                let name = res[0].emp_name
                let sex = res[0].emp_sex
                let age = res[0].emp_age
                let desg = res[0].emp_desg
                //console.log(`Here is the User ${name}${sex}${age}${desg}`)
                response.render('editForm', {
                    e_no: id,
                    e_name: name,
                    e_sex: sex,
                    e_age: age,
                    e_desg: desg
                })

            }
        })
    }
    get_emp_forEdit(con, res)
})
app.post('/edit/employee/save_change', (req, res) => {
    console.log(JSON.stringify(req.body))
    let user = req.body['user_id'] //anyway .user-id or [user_id]
    let u_name = req.body.g_name
    let u_sex = req.body.g_sex
    let u_age = req.body.g_age
    let u_desg = req.body.g_desg
    console.log(user)
    update_employee = (connection, response) => {
        let query6 = "update Employee set emp_name='" + u_name + "', emp_sex='" + u_sex + "', emp_age='" + u_age + "', emp_desg='" + u_desg + "' where emp_no =" + user + ""
        connection.query(query6, (err, res) => {
            if (err) {
                console.log(`Error! While updating Data ${err}`)
                response.send('0')
            } else {
                console.log(`${res.affectedRows} Rows Updated`)
                response.send('1')
                /*Select Query Function*/

                /*End Select Query */


            }

        })
    }

    update_employee(con, res)

    // get_data = (connection, response) => {
    //     let query7 = 'select * from Employee where emp_no > 0 & status=1'
    //     connection.query(query7, (err, res) => {
    //         if (err) console.log(`Error! While Fetching Data ${err}`)
    //         else {
    //             //console.log(JSON.stringify(res))
    //             response.render('student_view', {
    //                 data: res
    //             })

    //         }

    //     })
    // }
    // get_data(con, res)

})

app.post('/edit/employee/delete', (req, res) => {
    // console.log(JSON.stringify(req.body))
    let user_id = req.body['user']
    console.log(JSON.stringify(user_id))
    delete_emp = (connection, response) => {
        //instead of delete, chaging the status to 0
        let query8 = "update Employee set status='" + 0 + "' where emp_no='" + user_id + "'"
        connection.query(query8, (err, res) => {
            if (err) {
                console.log(`Error!! while Deleting Employee ${err}`)
                response.send('0')
            } else {
                console.log(`Employee : ${user_id} Deleted`)
                response.send('1')
            }
        })
    }
    delete_emp(con, res)
})


app.listen(port, hostname, () => {
    console.log(`Server Running on Port:${port}`)
})