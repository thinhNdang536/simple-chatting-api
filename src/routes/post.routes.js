const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');

router.get('/post/:id', postController.getPost);

module.exports = router;
