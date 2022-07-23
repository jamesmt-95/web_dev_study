exports.connect_exp = () => {
    const mysql = require('mysql');
    const conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database:'Node_DB'
    });
    return conn
   
}



//module.exports.exp_conn = conn;
//or exports.exp_conn = conn;
/*
exporting entire code
-----------------------
module.exports={
    myFunction:()=>{
        console.log('Ok)
    },
    var input = 'OK'   // use , for separating items
}
*/