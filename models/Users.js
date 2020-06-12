/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
/* eslint-disable func-names */

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { PostsSchema } = require('./Posts');

const SALT_WORK_FACTOR = 10;

const UsersSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
  },
  // profile_img: {
  //   type: String, -> // url de la imagen que esta almacenada den otro perfil
  // },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
  posts: [PostsSchema],
  // Ejemplo de manejar embedido cardinalidad de 1-1
  // address: {
  //   streetname: {},
  //   zip_code: {},
  //   city: {},
  //   country: {},
  // },

  // Ejemplo de manejar referenciado cardinalidad de 1-1
  // address_ref: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Addresses',
  // },

});

UsersSchema.pre('save', function (next) {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, (errHash, hash) => {
      if (err) return next(errHash);

      // override the cleartext password with the hashed one
      user.password = hash;
      return next();
    });
  });
  return false;
});


const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;
