const mysql = require('mysql');

var poll = mysql.creadPoll({
    "user" : process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database" : process.env.MYSQL_DATABASE,
    "localhost" : process.env.MYSQL_HOST,
    "port": process.env.MYSQL_POST
});

exports.pool = poll;
