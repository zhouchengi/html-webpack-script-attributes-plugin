## 基于html-webpack-plugin的一个插件
可以给script标签添加attributes

## Usage
``` javascript
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackScriptAttributesPlugin = require('html-webpack-script-attributes-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin(),
    new HtmlWebpackScriptAttributesPlugin({
      crossorigin: 'anonymous'
    })
  ]
}
```
