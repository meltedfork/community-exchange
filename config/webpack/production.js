process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const environment = require('./environment');

environment.config.set('output.hashFunction', require('xxhash-addon').XXHash64);

module.exports = environment.toWebpackConfig();
