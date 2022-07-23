const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'test_node'   //once database created add databse:
});
conn.connect((err) => {
    if (err) console.log('Error :' + err.message);
    console.log("Connected");
    // conn.query('create database test_node', (err, result) => {
    //     if (err) console.log('Error' + err.message);

    //     console.log('Database created');
// const query='Create table node_ (name varchar(15),age int)';
// conn.query(query,(err)=>{
// if(err) console.log(`Error Found ${err}`);
// console.log('Table Created');
// });
// const query='insert into node_ (name,age) values("James",24)';
// conn.query(query,(err)=>{
// if(err) console.log(`Error Found ${err}`);
// console.log('Value Inserted');
// });

const query='insert into node_ (name,age) values ?';
var values = [
    ['Jacob','23'],
    ['Steve','22']
];
conn.query(query,[values],(err,result)=>{
if(err) console.log(`Error Found ${err}`);
console.log(result);
console.log('Value Inserted, Rows Affected'+result.affectedRows+'inserted ID'+result.insertedID);
});

conn.query('select name from node12 where id=1',(err,result,fields)=>{
    if(err) console.log(`Error Found ${err}`);
    console.log(result[0].name);
    // console.log(fields[0].name)
    //console.log('Value Inserted, Rows Affected'+result.affectedRows+'inserted ID'+result.insertedID);
    });

    })

// });