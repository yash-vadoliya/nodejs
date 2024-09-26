const mysql = require('mysql2');

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Use your MySQL username
    password: '', // Use your MySQL password
    database: 'school'
});

// Connect to the database
db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL Database.');
});

// Get all students
exports.getAllStudents = (req, res) => {
    const query = 'SELECT * FROM students';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

// Get student by ID
exports.getStudentById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM students WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) throw err;
        res.json(results[0]);
    });
};

// Create new student
exports.createStudent = (req, res) => {
    const { name, std, address } = req.body;
    const query = 'INSERT INTO students (name, std, address) VALUES (?, ?, ?)';
    db.query(query, [name, std, address], (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId, name, std, address });
    });
};

// Update student by ID
exports.updateStudent = (req, res) => {
    const { id } = req.params;
    const { name, std, address } = req.body;
    const query = 'UPDATE students SET name = ?, std = ?, address = ? WHERE id = ?';
    db.query(query, [name, std, address, id], (err) => {
        if (err) throw err;
        res.json({ message: 'Student updated successfully' });
    });
};

// Delete student by ID
exports.deleteStudent = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM students WHERE id = ?';
    db.query(query, [id], (err) => {
        if (err) throw err;
        res.json({ message: 'Student deleted successfully' });
    });
};