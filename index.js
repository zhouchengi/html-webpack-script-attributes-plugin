function WebpackHtmlScriptAttributesPlugin(options = {}) {
  const defaultOptions = {
    
  }
  this.options = Object.assign({}, defaultOptions, options);
}

WebpackHtmlScriptAttributesPlugin.prototype.apply = function(compiler) {
  var self = this;
  if (compiler.hooks) {
    compiler.hooks.compilation.tap('HtmlWebpackReplace', function(compilation) {
      compilation.hooks.htmlWebpackPluginAlterAssetTags.tapAsync(
        'HtmlWebpackReplace',
        self.innerScript.bind(self)
      );
    });
  } else {
    compiler.plugin('compilation', compilation => {
      compilation.plugin(
        'html-webpack-plugin-alter-asset-tags',
        self.innerScript.bind(self)
      );
    });
  }
};

WebpackHtmlScriptAttributesPlugin.prototype.innerScript = function(
  htmlPluginData,
  callback
) {
  ['head', 'body'].map(position => {
    for (var i = 0; i < htmlPluginData[position].length; i++) {
      for (var key in this.options) {
        if (htmlPluginData[position][i].attributes.type === 'text/javascript') {
          htmlPluginData[position][i].attributes[key] = this.options[key]
        }
      }
    }
  });
  callback(null, htmlPluginData);
};

module.exports = WebpackPluginAttributesScript;
