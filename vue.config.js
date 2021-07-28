const path = require('path')
const debug = process.env.NODE_ENV !== 'production'

module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /.mdx?$/,
                    use: ['babel-loader', '@mdx-js/vue-loader']
                }
            ]
        }
    },
    publicPath: '/',
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://10.0.32.240:80', //代理地址
                changeOrigin: true, //可否跨域
                ws: false,
                pathRewrite: {
                    '^/api': '' //重写接口，去掉/api
                },
            },
            '/img': {
                target: 'http://10.0.60.113:80', //代理地址
                changeOrigin: true, //可否跨域
                ws: false,
                pathRewrite: {
                    '^/img': '' //重写接口，去掉/api
                },
            },

        }
    },
}