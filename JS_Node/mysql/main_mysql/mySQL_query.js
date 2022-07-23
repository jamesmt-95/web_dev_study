const get_conn = require('./db_con.js'); //or ./db_con
const con = get_conn.connect_exp(); //beacause connect_exp() returns connection Object

con.connect((err) => {
    if (err) console.log('Connection Failed !!!');
    else console.log('Connected Successfully');
})

//test value
//creating databse
/*
const query1='Create database if not exists Node_DB';
con.query(query1,(err)=>{
if(err) console.log('Error! with Database');
else console.log('Database Created !!')
});
*/

//creating table
/*
const query2 = 'Create table if not exists Student (ID int primary key auto_increment, name varchar(15) not null, age int not null, city varchar(15))';
con.query(query2,(err)=>{
    if(err) console.log('Error, while creating Table');
    else console.log('Table Created');
});
*/

//Inserting Values
/*
For -> JSON Format Values  not working currently
var std_values = [{
    name: 'James',
    age: 23,
    city: 'Delhi'
},
{
    name: 'James',
    age: 23,
    city: 'Delhi'
}
];
For values in JSON Format , use direct query & inside, con.query 'values?',std_values(err,result)=>{} 
ex: con.query('insert into Student (name,age,city) values ?', std_values, (err, result) => {});
*/
const query3 = 'insert into Student (name,age,city) values ?';
//insert into Student values(NULL,'A',x,'B') NULL->Auto_increment
var std_values = [
    [
        'James', 23, 'Alappuzha'
    ],
    [
        'Jacob', 22, 'Delhi'
    ],
    [
        'Jerome', 24, 'Kolkata'
    ],
    [
        'Steve', 25, 'Faridabad'
    ],
    [
        'Nikhil', 26, 'Agra'
    ]
];
/*con.query(query3, [std_values], (err, result) => {
    if (err) console.log('Error, While inserting Data' + err.message);
    else console.log(`${result.affectedRows} No.of Rows inserted `);
});
*/

//Result Object
/*
When executing a query, a result object is returned.
The result object contains information about how the query affected the table.

The result object returned from the example above looks like this:
{
  fieldCount: 0,
  affectedRows: 14,
  insertId: 0, //last ID
  serverStatus: 2,
  warningCount: 0,
  message: '\'Records:14  Duplicated: 0  Warnings: 0',
  protocol41: true,
  changedRows: 0
}
*/

//Selecting Values console.log(result) or console.log(JSON.stringify(result))
const query4 = 'select name,age from student';
con.query(query4, (err, result, fields) => {
    if (err) console.log('Error, while Fetching Data');
    else console.log(`Results:\n ${JSON.stringify(result)} \n &  Name : ${result[0].name} \n `);
});

//Where clause
const query5 = 'select name,age from student where ID>2';
con.query(query5, (err, result, fields) => {
    if (err) console.log('Error, while Fetching Data');
    else console.log(`Where ID>5:\n ${JSON.stringify(result)} \n `);
});


//ORDER BY clause
const query6 = 'select name,age from student ORDER BY name';
con.query(query6, (err, result, fields) => {
    if (err) console.log('Error, while Fetching Data');
    else console.log(`ORDER BY (name):\n ${JSON.stringify(result)} \n `);
});


//Delete
const query7 = 'Delete from Student where ID=4'; //ID>5 
con.query(query7, (err, result, fields) => {
    if (err) console.log('Error, while Deleting Data');
    else console.log(`Delete ID=4:\n ${result.affectedRows} \n `);
});

//Drop Table
/*
const query8 = 'Drop table Student'; //ID>5 
con.query(query8,(err)=>{
    if(err) console.log('Error, while Dropping Data');
    else console.log(`Table Dropped`);
});
*/
//Update Table
const query8 = "update Student set city = 'Kochi' where ID=2";
con.query(query8, (err, result) => {
    if (err) console.log('Error, while Updating Data');
    else console.log(`${result.affectedRows} Row of Student table Updated `);
});

//Update Table
/*
const query8 = "update Student set city = 'Kochi' where ID=2"; 
con.query(query8, (err, result) => {
    if (err) console.log('Error, while Updating Data');
    else console.log(`${result.affectedRows} Row of Student table Updated `);
});
*/

//Limit (Starts from 1)
const query9 = 'Select * from Student limit 5';
con.query(query9, (err, result) => {
    if (err) console.log('Error, while Fetching Data');
    else console.log(`Limit 5: \n ${JSON.stringify(result)} `);
});

//Limit ( LIMIT 2 offset 1 ( Two rows of data after 1 offset ie.from 2 to 4 ))
//Limit 2 offset 5 is similar as Limit2,5
const query10 = 'Select * from Student limit 5 offset 2 '; //from 3-8
con.query(query10, (err, result) => {
    if (err) console.log('Error, while Fetching Data');
    else console.log(`Limit 5 Offset 2: \n ${JSON.stringify(result)} `);
});

//Join 
/*Inner Join(Join) */
const query11 = 'Select S.name, S.age, C.course_name from Student S INNER JOIN Course C on S.ID = C.S_ID'; //from 3-8
con.query(query11, (err, result) => {
    if (err) console.log('Error, while Fetching Data');
    else console.log(`Inner Join (JOIN) : \n ${JSON.stringify(result)} `);
});

//Left Join
const query12 = 'Select S.name, S.age, C.course_name from Student S LEFT JOIN Course C on S.ID = C.S_ID'; //from 3-8
con.query(query12, (err, result) => {
    if (err) console.log('Error, while Fetching Data');
    else console.log(`LEFT Join : \n ${JSON.stringify(result)} `);
});

//Right Join
const query13 = 'Select S.name, S.age, C.course_name from Student S RIGHT JOIN Course C on S.ID = C.S_ID'; //from 3-8
con.query(query13, (err, result) => {
    if (err) console.log('Error, while Fetching Data');
    else console.log(`RIGHT Join : \n ${JSON.stringify(result)} `);
});

//Full Outer Join - keyword return all records when there is a match in either left (table1) or right (table2) table records.
/*
const query14 = 'Select S.name, S.age, C.course_name from Student S FULL OUTER JOIN Course C on S.ID = C.S_ID'; //from 3-8
con.query(query14, (err, result) => {
    if (err) console.log('Error, while Fetching Data'+err.message);
    else console.log(`Full Outer Join : \n ${JSON.stringify(result)} `);
});
*/

//Creating View
const query15 = 'create view student_view as select name from Student where ID > 0'; //from 3-8
con.query(query15, (err, result) => {
    if (err) console.log('Error, while Creating View');
    else console.log(`View Created :\n ${JSON.stringify(result)} `);
});

//Display or Fetch Data from View
const query16 = 'select * from student_view'; //from 3-8
con.query(query16, (err, result) => {
    if (err) console.log('Error, while Fetching View');
    else console.log(`View Student_view :\n ${JSON.stringify(result)} `);
});

//Updating or Altering View
const query17 = 'create or replace view student_view as select name,age from Student where ID>0'; //from 3-8
con.query(query17, (err, result) => {
    if (err) console.log('Error, while Updating View');
    else console.log(`View: Student_view Updated:\n ${JSON.stringify(result)} `);
});

//Fetching Updated View
const query18 = 'select * from student_view'; //from 3-8
con.query(query18, (err, result) => {
    if (err) console.log('Error, while Fetching View');
    else console.log(`Updated View :\n ${JSON.stringify(result)} `);
});


