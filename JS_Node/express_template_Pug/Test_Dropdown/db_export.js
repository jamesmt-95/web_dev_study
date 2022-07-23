//God is with me
exports.conn_exp = () => {
    let mysql = require('mysql')
    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'cart_test'
    })
    return con
}