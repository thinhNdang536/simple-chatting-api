const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/user', userController.getUser);

module.exports = router;
