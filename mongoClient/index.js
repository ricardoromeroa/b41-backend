/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
const mongoose = require('mongoose');

// process.env.MI_VARIABLE_DE_ENTORNO => Así accesdemos a variables de entorno
const { MONGO_URI } = require('../config');

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(() => console.log('database connected'))
    // eslint-disable-next-line no-console
    .catch(() => console.log('error conecting to database...'));
