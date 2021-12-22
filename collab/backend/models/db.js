const mysql= require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password :process.env.password,
    database : 'postdb'
});



module.exports = con;