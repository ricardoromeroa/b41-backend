/* eslint-disable linebreak-style */
/* eslint-disable no-console */
const jwt = require('jsonwebtoken');

module.exports = {
  verifyToken: (req, res, next) => {
    const { authorization } = req.headers;

    // Authorization.split(' '); -> ["Bearer", ]
    const token = authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.decoded = decoded;

    next();
  },
};
