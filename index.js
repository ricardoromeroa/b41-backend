/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
require('dotenv').config();
require('./mongoClient');
const api = require('./api');

// es necesario pedir el PORT de una variable de entorno

const PORT = process.env.PORT || 3000;

api.listen(PORT, () => console.log(`Server listening on ${PORT}`));
