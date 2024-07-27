exports.index = (req, res) => {
    res.json({
        "status": "success",
        "data": [
            { "id": 1, "name": "hp", "price": 45000, "category": "leptop" },
            { "id": 2, "name": "dell", "price": 42000, "category": "leptop" },
            { "id": 3, "name": "mac", "price": 100000, "category": "leptop" },
            { "id": 4, "name": "asus", "price": 50000, "category": "leptop" },
            { "id": 5, "name": "lenovo", "price": 40000, "category": "leptop" }
        ],
        "message": "Retrive data"
    });
}

exports.show = (req, res) => {
    const id = req.params.id;
    res.json({

        "status": "success",
        "data": [
            { "id": id, "name": "hp", "price": 45000, "category": "leptop" },
        ],
        "message": "Retrive data"
    });
}

exports.store = (req, res) => {
    res.json({
        "status": "success",
        "data": [
            { "name": "hp", "price": 45000, "category": "leptop" },
        ],
        "message": "Post data"
    });
}

exports.update = (req, res) => {

    res.json({
        "status": "success",
        "data": [
            { "name": "hp", "price": 45000, "category": "leptop" },
        ],
        "message": "Update data"
    });
}

exports.destroy = (req, res) => {

    res.json({
        "status": "success",
        "data": [
            { "id": 1 },
        ],
        "message": "Delete data"
    });
}