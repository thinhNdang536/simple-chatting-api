const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notification.controller');

router.get('/notification/:userid', notificationController.getNotification);

module.exports = router;
