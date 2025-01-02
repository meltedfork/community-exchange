process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const environment = require('./environment');

environment.config.set(outputPath.hashFunction, 'xxhash64');

module.exports = environment.toWebpackConfig();
