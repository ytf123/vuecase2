const path = require('path');
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/less/index.less')
      ]
    }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#ec6800'
          },
          javascriptEnabled: true
        }
      }
    }
  }
}
