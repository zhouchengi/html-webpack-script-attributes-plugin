import {Compiler} from 'webpack'
import HtmlWebpackPlugin, { HtmlTagObject } from 'html-webpack-plugin'

interface AlterAssetTags {
  assetTags: {
    scripts: HtmlTagObject[];
    styles: HtmlTagObject[];
    meta: HtmlTagObject[];
  };
  outputName: string;
  plugin: HtmlWebpackPlugin;
}

interface Options {
  [x:string]: string
}

class HtmlWebpackScriptAttributesPlugin {
  constructor(options?: Options) {
    this.options = Object.assign({}, this.defaultOptions, options)
  }

  defaultOptions:Options = {}

  options:Options = {}

  apply(compiler: Compiler) {
    compiler.hooks.compilation.tap('html-webapck-script-attributes-plugin', (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).alterAssetTags.tapAsync('html-webapck-script-attributes-plugin', this.run)
    })
  }

  run = (data: AlterAssetTags, cb: any) => {
    if (this.options) {
      data.assetTags.scripts.map((script) => {
        for (const key in this.options) {
          script.attributes[key] = this.options[key]
        }
      })
    }

    cb(null, data)
  }
}

export default HtmlWebpackScriptAttributesPlugin
