const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express ();

// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// response for any request not found
app.use((req, res) => {
    res.status(404).end();
});

// starts the server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
    });
});