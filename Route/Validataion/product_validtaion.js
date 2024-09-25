const joi = require('joi');

exports.createproduct = (req, res, next) => {
    const productSchema = joi.object({
        "id": joi.number().required(),
        "name": joi.string().required(),
        "program": joi.string().required(),
        "enrollmentno": joi.number().required(),
        "dob": joi.string().required(),
        "mobile": joi.number().required(),
        "email": joi.string().email().required(),
        "address": joi.string().required()
    });

    const { error } = productSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
}