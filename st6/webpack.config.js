const path = require("path");
const webpack = require('webpack');
// var CleanWebpackPlugin = require('clean-webpack-plugin');
// var openBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    //入口文件
    entry: './app/app.js',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    //输出文件
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },

    module: {
        rules: [{
            test: /\.css$/,
            use: [
                "style-loader",
                "css-loader"
            ]
        }]
    },

    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'st6'),
        publicPath: '/'
    }

    // plugins: [
    //     new openBrowserPlugin({ url: 'http://localhost:8080' }),
    //     new CleanWebpackPlugin(['build'])
    // ]
}