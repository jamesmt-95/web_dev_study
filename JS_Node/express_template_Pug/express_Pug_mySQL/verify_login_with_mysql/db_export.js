exports.conn_string = () => {
    const mysql = require('mysql')
    const conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'express_pug'
    })
    return conn
}