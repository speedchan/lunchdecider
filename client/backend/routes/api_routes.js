const path = require('path');
const mysql = require('mysql');
const crypto = require('crypto');
const hashPassword = require('../hash.js');

module.exports = (app, connection) => {
    app.get('/', (req, res) => {
        // Go to localhost:3001/ to see this endpoint
        connection.query('SELECT * FROM user', function(err, data) {
            if (err) {
                res.send(err)
            } else {
                res.json({
                    data: data
                })
            }
        })
    })
    app.get('/hello', (req, res) => {
        // Go to localhost:3001/hello to see this endpoint
        connection.query('SELECT * FROM user', function(err, data) {
            res.json({hello: "haloumi"})
        })
    })
    app.post('/user/register', (req,res) => {
        
        let {email, password} = req.body;
        console.log("reqbody:",req.body)
        // let hashedPassword = hashPassword(password)
        // console.log("hashedPassword:", hashedPassword)
        // STOP BECAUSE error 500 
        connection.query(`INSERT INTO user (email, password) VALUES ('${email}', '${hashedPassword.password}', '${hashedPassword.salt}')`,(err, results) => {
            if(err){
                return res.send(err)
            } else {
                return res.send('successfully registered')
            }
        })
    })

}