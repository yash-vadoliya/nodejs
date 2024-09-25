const app_model = require("./../model/app_model");


exports.index = async(req, res) => {
    try {
        const app_model = await app_model.find();
        res.status(201).json(app_model);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.show = async(req, res) => {
    try {
        const app_model = await app_model.find({ "_id": req.params.id });
        res.status(201).json(app_model);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.store = async(req, res) => {
    const app = await app_model.create(req.body);
    res.send('insert data successfully..');
}
exports.update = async(req, res) => {
    const app = await app_model.findByIdAndUpdate(req.body.id, req.body, { new: true });
    res.send('update data successfully..');
}
exports.destroy = async(req, res) => {
    const app = await app_model.findByIdAndDelete(req.body.id);
    res.send('delete data successfully..');
}