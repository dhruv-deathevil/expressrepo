const mysql = require("mysql2")
connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database: "DictionaryDB"
})
module.exports=connection;