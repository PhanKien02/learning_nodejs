const mysql =require ('mysql2')

const connection = mysql.createConnection({
    database : 'appTodo',
    host: 'localhost',
    user: 'root',
    password: 'root'
})

module.exports = connection