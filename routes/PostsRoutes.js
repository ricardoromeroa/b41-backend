/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();

const { PostsValidator } = require('../validators');
const { PostsController } = require('../controllers');


router.post('/users/:id/posts',
  PostsValidator.create,
  PostsController.create);


module.exports = router;
