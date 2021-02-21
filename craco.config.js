const path = require('path');
const config = require('./config.js');

const aliases = config.aliases;

// fromEntries: gives us a plain object from entries of type [key, value]
const resolveAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [key, path.resolve(__dirname, value)] )
)

module.exports = {
  webpack: {
    alias: resolveAliases,
  }
};
