const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/client/index.js',
    module: {
        rules: [
            {
                test: '/\.js$/', // anything that ends in .js
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}

