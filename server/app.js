var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Superman23",
    database: "weddingtodolist"
});

con.connect(function(error) {
    if (error) {
        throw error;
    }

    console.log("Connected");

    var sqlStatement = "INSERT INTO tasks (title, status) VALUES ?";
    var values = [
        ["Call Darlene", "Not Started"],
        ["Finish Welcome Sign", "Not Started"]
    ]

    con.query(sqlStatement, [values], function(err, result) {
        if (err) {
            throw error;
        }

        console.log(result);
    })
});
