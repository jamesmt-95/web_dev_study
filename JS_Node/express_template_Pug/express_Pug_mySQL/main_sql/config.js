 /*
 or const get_db_conn = require('./db_export')
  const con = get_db_conn.con_string() 
  */
 const con = require('./db_export').con_string()
 const port = 8080
 const hostname = '127.0.0.1'
 const express = require('express')
 const app = express()
 const bodyParser = require('body-parser')

 //const con = get_db_conn.con_string()  //con sttring from exported module

 app.use(bodyParser.urlencoded({
     extended: false
 }))
 app.set('views', __dirname + '/view_pug')
 app.set('view engine', 'pug')



 con.connect((err) => {
     if (err) console.log('Connection Failed !!!');
     else {
         console.log('Connected Successfully');

         //creating table and inserting
         create_table = () => {
             let query1 = 'Create table if not exists sample (ID int primary key auto_increment, name varchar(15) not null, age int not null)'
             con.query(query1, (err, res) => {
                 if (err) console.log(`Error ! While Creating Table ${err}`)
                 else console.log(`Table Created ${JSON.stringify(res)}`)
             })
         }

         insert_data = () => {
             let query2 = "insert into sample (name,age) values ?";
             var user_data = [
                 [
                     'James', 23
                 ],
                 [
                     'Steve', 24
                 ],
                 [
                     'Sterin', 23
                 ],
                 [
                     'Josh', 20
                 ],
                 [
                     'Albin', 24
                 ],
                 [
                     'James', 23
                 ],
                 [
                     'Steve', 24
                 ],
                 [
                     'Sterin', 23
                 ],
                 [
                     'Josh', 20
                 ],
                 [
                     'Albin', 24
                 ],
                 [
                     'Jefry', 20
                 ],
                 [
                     'Aromal', 24
                 ]
             ];

             con.query('insert into sample (name,age) values ?', [user_data], (err, res) => {
                 if (err) console.log(`Error! While inserting Data ${err}`)
                 else console.log(`${res.affectedRows} Rows Inserted`)
             })
         }
         // 

     }
 })

 app.get('/', (req, res) => {
     /*
     // Not Working
          con.query('select * from sample', (err, res) => { //show tables
              //console.log(JSON.stringify(res))
              if (err) console.log(`Error! While Fetching Data`)
              else {
                  //console.log(JSON.stringify(res))
                  res.render('show_pug', {
                      result: res
                  })
              }
          })
     */
     exec_query = (x, y) => {
         x.query('select * from sample', (err, res) => {
             if (err) console.log(`Error! While Fetching Data`)
             else {
                 y.render('show_pug', {
                     result: res //always this key differenet
                 })
             }
             //show tables
             //console.log(JSON.stringify(res))
         })
     }
     exec_query(con, res)

 })
 app.get('/delete/:id([0-9]{2})', (req, res) => {

     let del_id = req.params.id

     delete_user = (x) => {
         x.query('delete from sample where ID=' + del_id, (err, res) => {
             if (err) console.log('Error! While deleting data')
             else console.log(`${res.affectedRows} Row Deleted`)
         })


     }
     delete_user(con)


 })
 app.get('/update/:id([0-9]{1})', (req, res) => {
     //http://127.0.0.1:8080/update/1?name=james
     //console.log('OK')
     //console.log(req.query['name'])
     let user_id = req.params.id
     let update_val = req.query['name']
     //let update_val = req.query['name'] or req.query.name
     update_user = (x) => {
         x.query("update sample set name='" + update_val + "' where ID=" + user_id, (err, res) => {
             if (err) console.log(`Error! While updating Data ${err}`)
             else console.log(`${res.affectedRows} Row Updated`)
         })

     }
     update_user(con)
 })

 app.listen(port, hostname, () => {
     console.log(`Server Running on Port:${port}`)
 })