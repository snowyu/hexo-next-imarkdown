const fs = require('hexo-fs')
const utils = require('hexo-cake-utils')(hexo, __dirname)
const markdownIt = require('./markdown-it')

const indexOfPlugin = require('./markdown-it/indexof-plugin')
const getPlugins = require('./markdown-it/get-plugins');

const IMD_VER = '0.4.3'
const iMarkdownBaseName = `imarkdown-${IMD_VER}-min`

let opts = getPlugins(utils.defaultConfigFile('imarkdown', 'default.yaml'))
const oldHighlightEnable = hexo.config.highlight.enable
hexo.config.highlight.enable = false
if (oldHighlightEnable || opts.highlight) opts.plugins.push('markdown-it-highlight-i')
if (opts.math) opts.plugins.push('markdown-it-math')

markdownIt(hexo, opts)

opts.highlight = opts.highlight || oldHighlightEnable || indexOfPlugin(opts.plugins, 'markdown-it-highlight-i') >= 0
if (!opts.math)
  opts.math = indexOfPlugin(opts.plugins, 'markdown-it-math') >= 0

opts.version = IMD_VER
hexo.extend.filter.register('theme_inject', function(injects) {

  injects.head.file('head-imarkdown', utils.getFilePath('head.swig'), {imarkdown:opts}, {})
  injects.bodyEnd.file('body-end-imarkdown', utils.getFilePath('body-end.swig'), {imarkdown:opts}, {})

});

hexo.extend.generator.register('imarkdown-asset', function(locals){
  return [
    {
      path: `/assets/imarkdown/${iMarkdownBaseName}.js`,
      data: function(){
        return fs.createReadStream(utils.getFilePath(iMarkdownBaseName+'.js'))
      }
    },
    {
      path: `/assets/imarkdown/${iMarkdownBaseName}.css`,
      data: function(){
        return fs.createReadStream(utils.getFilePath(iMarkdownBaseName+'.css'))
      }
    },
  ];
});
