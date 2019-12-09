const path = require('path')
var express = require('express')
var axios = require('axios')
var app = express()
var apiRoutes = express.Router()
module.exports = {

  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'api': '@/api',
        'base': '@/base'
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://c.y.qq.com/',
        // target: 'http://localhost:3200/',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    //添加一个before方法
    before(apiRoutes) {
      apiRoutes.get('/api/getDiscList', (req, res) => {
        const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg';
        axios.get(url, {
          headers: {
            referer: 'https://c.y.qq.com/',
            host: 'c.y.qq.com'
          },
          params: req.query //这是请求的query
        }).then((response) => {
          //response是api地址返回的，数据在data里。
          res.json(response.data)
        }).catch((e) => {
          console.log(e);
        })
      });
      app.use('/api', apiRoutes);
    },

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
