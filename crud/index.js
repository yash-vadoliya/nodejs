const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const router = require('./route/student_route');

mongoose.connect('mongodb+srv://vadoliyayash1409:yash%401409@mcadatabase.j2ldy.mongodb.net/Student', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use('/crud', router)

app.listen(5000, () => {
    console.log("listening at http://localhost:5000");
})