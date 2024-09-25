const express = require('express');
const router = express.Router();

const app_controller = require("./../contoller/app_controller.js");

router.get('/', app_controller.index);
router.get("/:id", app_controller.show);
router.post('/', app_controller.store);
router.put('/:id', app_controller.update);
router.delete('/:id', app_controller.destroy);

module.exports = router;