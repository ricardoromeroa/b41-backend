const { Posts } = require('../models/Posts');

module.exports = {
  create: (body) => {
    const NewPost = new Posts(body);
    return NewPost;
  },
};
