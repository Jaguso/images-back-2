const express = require('express');
const router = express.Router();
const pictureController = require('../controllers/pictures');

router.post('/', pictureController.picture_create);
router.get('/', pictureController.pictures_get_all);

module.exports = router;