## html-webpack-script-attributes-plugin

Addon for the html-webpack-plugin to customize script attributes of script meta.

## Usage

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin')

// JS
const HtmlWebpackScriptAttributesPlugin = require('html-webpack-script-attributes-plugin').default

// TS
import OSSWebpackPlugin from 'oss-webpack-plugin'

module.exports = {
  plugins: [
    new HtmlWebpackPlugin(),
    new HtmlWebpackScriptAttributesPlugin({
      crossorigin: 'anonymous'
    })
  ]
}
```
