const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // mySQL username
        user: 'root',
        // MySQL password
        password: '',
        database: 'tracker'
    },
)

// starts the server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    });

module.exports = db.connection;