/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */

const { UsersService } = require('../services');

module.exports = {
    create: (req, res) => {
        UsersService.create(req.body)
            .then((user) => res.status(201).json(user))
            .catch((err) => res.status(400).json(err));
    },
    findAll: (req, res) => {
        UsersService.findAll()
            .then((users) => res.status(201).json(users))
            .catch((err) => res.status(400).json(err));
    },

    findById: (req, res) => {
        UsersService.findById()
            .then((user) => res.status(201).json(user))
            .catch((err) => res.status(400).json(err));
    },


};
