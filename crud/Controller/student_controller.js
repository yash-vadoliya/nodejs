// const student = require('./../Model/model_student');
const User = require('./../Model/user_model');

exports.index = (req, res) => {
    // res.json({
    //     "status": "success",
    //     "data": [{
    //             "name": "Yash",
    //             "program": "MCA",
    //             "enrollmentno": "230823111",
    //             "dob": "14/09/2002",
    //             "bloudgroup": "a+",
    //             "mobile": "8758787706",
    //             "email": "vadoliyayash1409@gmail.com",
    //             "address": "Zanzarda Road, junagadh"
    //         },
    //         {
    //             "name": "Yash Vadoliya",
    //             "program": "MCA",
    //             "enrollmentno": "230823111",
    //             "dob": "14/09/2002",
    //             "bloudgroup": "a+",
    //             "mobile": "8758787706",
    //             "email": "vadoliyayash1409@gmail.com",
    //             "address": "Zanzarda Road, junagadh"
    //         },
    //         {
    //             "name": "Vadoliya Yash",
    //             "program": "MCA",
    //             "enrollmentno": "230823111",
    //             "dob": "14/09/2002",
    //             "bloudgroup": "a+",
    //             "mobile": "8758787706",
    //             "email": "vadoliyayash1409@gmail.com",
    //             "address": "Zanzarda Road, junagadh"
    //         },
    //         {
    //             "name": "Vadoliya Yash L",
    //             "program": "MCA",
    //             "enrollmentno": "230823111",
    //             "dob": "14/09/2002",
    //             "bloudgroup": "a+",
    //             "mobile": "8758787706",
    //             "email": "vadoliyayash1409@gmail.com",
    //             "address": "Zanzarda Road, junagadh"
    //         },
    //     ],
    //     "message": "Retrive data"
    // });
    try {
        const users = await User.findAll();
        res.status(201).json(users);
    } catch (error) {
        res.status(500).json({ error: error.messege });
    }
}

// exports.show = (req, res) => {
//     const id = req.params.id;
//     res.json({
//         "status": "success",
//         "data": [{
//             "id": id,
//             "name": "Yash",
//             "program": "MCA",
//             "enrollmentno": "230823111",
//             "dob": "14/09/2002",
//             "bloudgroup": "a+",
//             "mobile": "8758787706",
//             "email": "vadoliyayash1409@gmail.com",
//             "address": "Zanzarda Road, junagadh"
//         }, ],
//         "message": "Retrive data"
//     });
// }

exports.store = async(req, res) => {
    // try {
    //     console.log(req.body);
    //     const stud = await student.create(req.body);

    //     res.status(201).json(stud);
    // } catch (error) {
    //     res.status(500).json({ error: error.message });
    // }
    const user = {
        username: req.body.username,
        birthday: req.body.birthday,
    }
    const jane = await User.create(user);
    res.send('insert customer successfully');
}

exports.update = (req, res) => {

    // res.json({
    //     "status": "success",
    //     "data": [{
    //         "name": "Yash",
    //         "program": "MCA",
    //         "enrollmentno": "230823111",
    //         "dob": "14/09/2002",
    //         "bloudgroup": "a+",
    //         "mobile": "8758787706",
    //         "email": "vadoliyayash1409@gmail.com",
    //         "address": "Zanzarda Road, junagadh"
    //     }, ],
    //     "message": "Update data"
    // });
    await User.update({ username: req.body.username, birthday: req.body.birthday }, {
        where: {
            id: req.body.id,
        },
    }, );
    res.send('update customer successfully');
}

exports.destroy = (req, res) => {
    // const id = req.params.id;
    // res.json({
    //     "status": "success",
    //     "data": [
    //         { "id": id },
    //     ],
    //     "message": "Delete data"
    // });
    await User.destroy(
        where: {
            id: req.body.id,
        },
    );
    res.send('update customer successfully');
}