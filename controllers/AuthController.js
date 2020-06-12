/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */

const { UsersService } = require('../services');
const { comparePasswords } = require('../utils');

module.exports = {
  register: (req, res) => {
    UsersService.create(req.body)
      .then((user) => {
        // eslint-disable-next-line no-param-reassign
        delete user.password;
        res.status(201).json(user);
      })
      .catch((err) => res.status(400).json(err));
  },

  login: (req, res) => {
    const { email, password } = req.body;
    let globalUser;
    // 1) Comprobar que el correo existe
    UsersService.FindOneByEmail(email)
      .then((user) => {
        globalUser = user;
        if (!user) res.status(404).json({ message: 'Credentials Error' });
        return comparePasswords(password, user.password);
      })
    // 2) Comparamos la contraseña que llega con la contraseña que ya tenemos almacenada
      .then((isValidPassword) => {
        if (!isValidPassword) res.status(404).json({ message: 'Credentials Error' });
        const token = createToken(globalUser);
        if (!token) res.status(400).json({ message: 'Error creating token' });
        res.status(200).json({ message: 'Successful Login', token });
      })
    // 3) Crear Token con credenciales del usuario
    // 4) Enviar token al cliente

      .catch((err) => res.status(400).json(err));
  },
};
