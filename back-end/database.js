const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host     : 'localhost', // MYSQL HOST NAME
    user     : 'root', // MYSQL USERNAME
    password : 'root', // MYSQL PASSWORD
    database : 'test' // MYSQL DB NAME
}).promise();
module.exports = dbConnection;