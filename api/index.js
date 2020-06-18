/* eslint-disable linebreak-style */
const express = require('express');
const { errors } = require('celebrate');
const cors = require('cors');


const api = express();

api.use(express.urlencoded({ extended: true }));
api.use(express.json({ extended: true }));
api.use(cors());

api.get('/', (req, res) => res.json({ message: 'Hello DEV.F' }));

api.use('/api/v1', require('../routes'));

api.use(errors());

// Users

module.exports = api;
