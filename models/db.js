const mysql = require("mysql");
const dbConfig = require("../config/db.config");


//db  connrections 
var connection = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
  });
  
  //DB Connections
    connection.getConnection((err, connection) => {
      if (err) {
        console.log("err found in db.js==,",err)
      }else {
        console.log("Connected to the MySql DB")
      }
      console.log(`connneted as id ${connection.threadId}`);
    })
  module.exports = connection;