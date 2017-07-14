var webpack = require("webpack");
var path = require("path");
var openBrowserPlugin = require('open-browser-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    //入口文件
    entry: './app/app.js',
    //输出文件
    output: {
        path: __dirname + '/build',
        filename: '[name].js'
    },

    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },

    plugins: [
        new openBrowserPlugin({ url: 'http://localhost:8080' }),
        new CleanWebpackPlugin(['build'])
    ]
}