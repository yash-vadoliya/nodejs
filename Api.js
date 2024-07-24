const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    response.send("Welcome to node js")
});

app.listen(2000, () => {
    console.log('listening at http://localhost:2000');
});