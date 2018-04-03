var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

connection.query("select * from department", function(err, result){
    if(err){
        consol.log(err);
    } else {
        console.log(result);
    }
    connection.end();
});

console.log("this prints before the error or the results");