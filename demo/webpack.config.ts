import path from 'path'
import { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import HtmlWebpackScriptAttributesPlugin from '../index'

const config: Configuration = {
  entry: path.join(__dirname, './index.ts'),
  mode: 'production',
  output: {
    path: path.join(__dirname, './dist'),
  },
  plugins: [new HtmlWebpackPlugin(), new HtmlWebpackScriptAttributesPlugin({
    crossorigin: 'anonymous'
  })]
}

export default config
