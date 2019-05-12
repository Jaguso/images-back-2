const express = require('express');
const router = express.Router();
const pictureController = require('../controllers/pictures');

router.post('/', pictureController.picture_create);

module.exports = router;