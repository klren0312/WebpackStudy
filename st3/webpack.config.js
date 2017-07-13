const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js',
        vendor: ['lodash']
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: "Output Management klrentest"
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // devtool: "cheap-eval-source-map"
    devtool: "inline-source-map"


};