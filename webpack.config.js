const path = require('path')
const webpack = require('webpack')
const createConfig = require('hjs-webpack')
const configOptions = require('./webpack_config/config-options')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const config = createConfig(configOptions)
const srcPath = path.resolve('./src')

config.plugins.push(
  new BrowserSyncPlugin(
    {
      host: 'localhost',
      port: 3100,
      proxy: 'http://localhost:3000/'
    },
    {
      reload: false
    }
  ),
  new webpack.EnvironmentPlugin(['NODE_ENV']),
  new webpack.NoErrorsPlugin()
)

config.resolve.alias = {
  components: srcPath + '/components',
  drivers: srcPath + '/drivers',
  pages: srcPath + '/pages',
  utils: srcPath + '/utils'
}

module.exports = config
