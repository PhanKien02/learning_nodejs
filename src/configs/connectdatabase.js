const mysql =require ('mysql2/promise')

const pool = mysql.createPool({
    database : 'learnnodejs',
    host: 'localhost',
    user: 'root',
    password: 'root',
    namedPlaceholders: true
})

module.exports = pool