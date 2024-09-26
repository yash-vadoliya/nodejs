const express = require('express');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/studentRoutes.js');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/students', studentRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});