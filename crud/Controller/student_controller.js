const student = require('./../Model/model_student');

exports.index = (req, res) => {
    res.json({
        "status": "success",
        "data": [{
                "name": "Yash",
                "program": "MCA",
                "enrollmentno": "230823111",
                "dob": "14/09/2002",
                "bloudgroup": "a+",
                "mobile": "8758787706",
                "email": "vadoliyayash1409@gmail.com",
                "address": "Zanzarda Road, junagadh"
            },
            {
                "name": "Yash Vadoliya",
                "program": "MCA",
                "enrollmentno": "230823111",
                "dob": "14/09/2002",
                "bloudgroup": "a+",
                "mobile": "8758787706",
                "email": "vadoliyayash1409@gmail.com",
                "address": "Zanzarda Road, junagadh"
            },
            {
                "name": "Vadoliya Yash",
                "program": "MCA",
                "enrollmentno": "230823111",
                "dob": "14/09/2002",
                "bloudgroup": "a+",
                "mobile": "8758787706",
                "email": "vadoliyayash1409@gmail.com",
                "address": "Zanzarda Road, junagadh"
            },
            {
                "name": "Vadoliya Yash L",
                "program": "MCA",
                "enrollmentno": "230823111",
                "dob": "14/09/2002",
                "bloudgroup": "a+",
                "mobile": "8758787706",
                "email": "vadoliyayash1409@gmail.com",
                "address": "Zanzarda Road, junagadh"
            },
        ],
        "message": "Retrive data"
    });
}

exports.show = (req, res) => {
    const id = req.params.id;
    res.json({
        "status": "success",
        "data": [{
            "id": id,
            "name": "Yash",
            "program": "MCA",
            "enrollmentno": "230823111",
            "dob": "14/09/2002",
            "bloudgroup": "a+",
            "mobile": "8758787706",
            "email": "vadoliyayash1409@gmail.com",
            "address": "Zanzarda Road, junagadh"
        }, ],
        "message": "Retrive data"
    });
}

exports.store = async(req, res) => {
    try {
        console.log(req.body);
        const stud = await student.create(req.body);

        res.status(201).json(stud);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.update = (req, res) => {

    res.json({
        "status": "success",
        "data": [{
            "name": "Yash",
            "program": "MCA",
            "enrollmentno": "230823111",
            "dob": "14/09/2002",
            "bloudgroup": "a+",
            "mobile": "8758787706",
            "email": "vadoliyayash1409@gmail.com",
            "address": "Zanzarda Road, junagadh"
        }, ],
        "message": "Update data"
    });
}

exports.destroy = (req, res) => {
    const id = req.params.id;
    res.json({
        "status": "success",
        "data": [
            { "id": id },
        ],
        "message": "Delete data"
    });
}