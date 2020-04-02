const mysql = require('mysql');

module.exports = function(app, connection) {
    app.get('/', function(req, res) {
        connection.query('SELECT * FROM user', function(err, data) {
            if (err) {
                res.send(err)
            } else {
                res.json({users: data})
            }
        } )
    })
}