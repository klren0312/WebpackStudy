const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    plugins: [
        new webpack.HotModuleReplacementPlugin() //enable HMR
    ],

    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },

    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
};