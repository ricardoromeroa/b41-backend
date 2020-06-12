/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();

const { PostsController } = require('../validators');
const { PostsValidator } = require('../controllers');


router.post('/users/:id/posts',
  PostsValidator.create,
  PostsController.create);


module.exports = router;
