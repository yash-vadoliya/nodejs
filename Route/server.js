const express = require('express');

const app = express();

app.use(express.json());

const router = require('./route/product_route');

app.use('/api', router)
app.listen(5000, () => {
    console.log("listening at http://localhost:5000");
})