const mysql = require('mysql2')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'world'
})

conn.connect((err) => {
    if (err) { console.error('خطا') 


    return;}
    console.log('ok')

})

module.exports = conn