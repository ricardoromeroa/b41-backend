/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();

const { UsersController } = require('../controllers');
const { UsersValidator } = require('../validators');
const { verifyToken } = require('../middlewares');

router.post('/users',
  UsersValidator.create,
  UsersController.create);

router.get('/users',
  verifyToken,
  UsersController.findAll);

router.get('/users/:id',
  UsersController.findById);

module.exports = router;
