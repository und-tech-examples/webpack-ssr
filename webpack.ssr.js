const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'client/src/ssr.js'),
    output: {
        path: path.resolve(__dirname, 'server/dist'),
        publicPath: '/dist/',
        filename: "server.js",
        libraryTarget: "umd",
        globalObject: "this",
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
};