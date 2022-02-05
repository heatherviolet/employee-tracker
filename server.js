const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express ();

// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// starts the server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});