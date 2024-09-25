const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const router = require('./route/app_route');

mongoose.connect('mongodb+srv://vadoliyayash1409:Yash_1234@mcadatabase.j2ldy.mongodb.net/my_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use('/app', router)

app.listen(3000, () => {
    console.log("listening at http://localhost:3000");
})