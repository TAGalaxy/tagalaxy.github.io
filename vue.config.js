const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')

module.exports = {
  publicPath: '', //使用相对路径
  outputDir: './index.html',
  // assetsDir: 'static',
  productionSourceMap: false,
  chainWebpack: config => {
    config.plugin('preload').tap(args => {
      args[0].fileBlacklist.push(/\.css/, /\.js/)
      return args
    })
    config.plugin('inline-source')
      .use('html-webpack-inline-source-plugin')
    config.plugin('html').tap(args => {
      args[0].chunksSortMode = 'none'
      args[0].inlineSource = '(.css|.js$)'
      return args
    })
    config.resolve.alias //添加别名
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
  }
}
