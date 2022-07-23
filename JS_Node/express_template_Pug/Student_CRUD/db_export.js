//God is with me
exports.conn_exp = () => {
    let mysql = require('mysql')
    let conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'express_pug'
    })
    return conn
}