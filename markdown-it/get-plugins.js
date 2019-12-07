const fullPlugins = require('./full-plugins');
const litePlugins = require('./lite-plugins');
const indexOfPlugin = require('./indexof-plugin');

module.exports = function(opts) {
  if (Array.isArray(opts.plugins)) {
    // remove duplicates
    opts.plugins = opts.plugins.filter((v, i, arr) => arr.indexOf(v) === i);
    litePlugins.forEach(v => (indexOfPlugin(opts.plugins, v) === -1) && opts.plugins.push(v));
  } else if (opts.plugins === 'lite') {
    opts.plugins = litePlugins;
  } else {
    opts.plugins = fullPlugins;
  }
  return opts;
}
