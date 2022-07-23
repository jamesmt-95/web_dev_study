const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test_node' //once database created add databse:
});
conn.connect((err) => {
    if (err) console.log('Error :' + err.message);
    console.log("Connected");
    conn.query('create database test_node', (err, result) => {
        if (err) console.log('Error' + err.message);
        console.log('Database created');
        const query = 'Create table node12 (id int auto_increment primary key, name varchar(15), age int)';
        conn.query(query, (err) => {
            if (err) console.log(`Error Found ${err}`);
            console.log('Table Created');
        });
        const query = 'insert into node12 (name,age) values("James",24)';
        conn.query(query, (err, result) => {
            if (err) console.log(`Error Found ${err}`);
            console.log('Value Inserted ID' + result.insertID);
        });

        const query = 'delete from node12 where id=2';
        conn.query(query, (err, result, fields) => {
            if (err) console.log(`Error Found ${err}`);
            console.log('Deleted' + fields.affectedRow);
        });



        const query = 'insert into node_ (name,age) values ?';
        var values = [
            ['Jacob', '23'],
            ['Steve', '22']
        ];
        conn.query(query, [values], (err, result) => {
            if (err) console.log(`Error Found ${err}`);
            console.log('Value Inserted, Rows Affected' + result.affectedRows + 'inserted ID' + result.insertedID);
        });
    })

});