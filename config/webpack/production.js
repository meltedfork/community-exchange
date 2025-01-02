process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const environment = require('./environment');

environment.config.set('output.hashFunction', require('hash-wasm').md4);

module.exports = environment.toWebpackConfig();
