const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: ["./src/main.js"]
    },
    mode: "development",
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    devServer: {
        contentBase: "dist",
        overlay: false,
        hot: true,
        stats: {
            colors: true
        }
    },
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: "babel-loader"
            }],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }]
        }, {
            test: /\.html$/,
            use: [{
                loader: "html-loader",
                options: {
                    attrs: ["img:src"]
                }
            }]
        }, {
            test: /\.(jpg|jpeg|png|gif|bmp)$/,
            use: [{
                loader: "file-loader",
                options: {
                    name: "images/[name].[ext]"
                }
            }]
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}