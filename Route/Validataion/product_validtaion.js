const joi = require('joi');

exports.createproduct = (req, res, next) => {
    const productSchema = joi.object({
        "id": joi.number().required(),
        "name": joi.string().required(),
        "price": joi.number().required(),
        "category": joi.string().required()
    });

    const { error } = productSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
}