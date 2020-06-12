/* eslint-disable linebreak-style */
const { NODE_ENV } = process.env;

const config = {
  production: {
    MONGO_URI: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cintanegra-roar-shard-00-00-djwvt.mongodb.net:27017,cintanegra-roar-shard-00-01-djwvt.mongodb.net:27017,cintanegra-roar-shard-00-02-djwvt.mongodb.net:27017/production?ssl=true&replicaSet=CintaNegra-ROAR-shard-0&authSource=admin&retryWrites=true&w=majority`,
  },
  staging: {
    MONGO_URI: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cintanegra-roar-shard-00-00-djwvt.mongodb.net:27017,cintanegra-roar-shard-00-01-djwvt.mongodb.net:27017,cintanegra-roar-shard-00-02-djwvt.mongodb.net:27017/developement?ssl=true&replicaSet=CintaNegra-ROAR-shard-0&authSource=admin&retryWrites=true&w=majority`,
  },

};

module.exports = config[NODE_ENV];
