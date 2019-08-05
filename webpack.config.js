const path = require('path');
const webpack = require('webpack');

const CONFIG = {
    mode: 'development',
    entry: ['react-hot-loader/patch', './index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        alias: {'react-dom': '@hot-loader/react-dom'},
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, 
                exclude: /(node_modules|bower_components)/, 
                use: 'babel-loader'
            }, {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ],
    },
    devServer: {
        contentBase: './public',
        port: 5000,
        compress: true,
        hotOnly: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
};

module.exports = CONFIG;