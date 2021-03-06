const express = require('express');
const mysql = require('mysql');
const PORT = process.env.PORT || 3002;
const app = express();
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.connect(err => {
    if (err) {
        console.log("Error: ", err)
    } else {
        console.log(`Connected to mysql database ${process.env.DATABASE}`)
        // console.log("Connected: ", connection)
    }
})

require('./routes/routes.js')(app, connection)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})