const path = require('path')
module.exports = {
  //  chainWebpack: config => {
  //    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
  //    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
  //  },
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
                'api':'@/api'
            }
        }
    },

    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'stylus',
        patterns: [
          //  path.resolve(__dirname, './src/assets/style/variable.styl'),
          //   path.resolve(__dirname, './src/assets/style/reset.styl'),
          //   path.resolve(__dirname, './src/assets/style/base.styl'),
          //   path.resolve(__dirname, './src/assets/style/icon.styl'),
        ]
      }
    }
}

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/style/variable.styl'),
        path.resolve(__dirname, './src/assets/style/reset.styl'),
        path.resolve(__dirname, './src/assets/style/base.styl'),
        path.resolve(__dirname, './src/assets/style/icon.styl'),
      ],
    })
}