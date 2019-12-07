/* global hexo */

'use strict';
const renderer = require('./lib/renderer');
const getPlugins = require('./get-plugins');

module.exports = function(hexo, opts) {
  // get the context of the folder `source/_data/...`
  const data = hexo.locals.get('data');
  opts = Object.assign({
    render: {
      langPrefix: '',
      html: true,
      xhtmlOut: false,
      breaks: true,
      linkify: true,
      typographer: true,
      quotes: '“”‘’'
    },
    anchors: {
      level: 1,
      collisionSuffix: '',
      tone: false
    }
  }, opts, hexo.theme.config.imarkdown, hexo.config.imarkdown, data.imarkdown);

  hexo.config.imarkdown = getPlugins(opts);

  hexo.extend.renderer.register('md', 'html', renderer, true);
  hexo.extend.renderer.register('markdown', 'html', renderer, true);
  hexo.extend.renderer.register('mkd', 'html', renderer, true);
  hexo.extend.renderer.register('mkdn', 'html', renderer, true);
  hexo.extend.renderer.register('mdwn', 'html', renderer, true);
  hexo.extend.renderer.register('mdtxt', 'html', renderer, true);
  hexo.extend.renderer.register('mdtext', 'html', renderer, true);
}
