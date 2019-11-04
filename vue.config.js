module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    },

    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'stylus',
        patterns: []
      }
    }
}
