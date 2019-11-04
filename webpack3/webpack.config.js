const path = require('path') //node的包里找path npm init
require('babel-polyfill')
require('babel-core')
require('babel-loader')
require('babel-preset-es2015')
module.exports = {
    entry:
        ['babel-polyfill','./src/main.js']
    , //要写绝对路径
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },

    module: {
        rules: [
            {   test: /\.css$/,
                use: [
                    { loader: "style-loader"},
                    { loader: "css-loader" }
                    ] },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }

                }
            }
        ]
    }
}