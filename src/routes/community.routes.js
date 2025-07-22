const express = require('express');
const router = express.Router();
const communityController = require('../controllers/community.controller');

router.get('/community/:id', communityController.getCommunity);

module.exports = router;
