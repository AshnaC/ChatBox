const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: ["webpack/hot/dev-server", "./src/index.js"],
    mode: "development",
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    // The resolve property allows us
    // to specify which extensions Webpack will resolve — this allows us to import modules without needing to add their extensions.
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3001,
        hot: true,
        proxy: {
            "*": {
                target: "http://127.0.0.1:3000",
                secure: false,
                changeOrigin: true,
                headers: {
                    Connection: "keep-alive"
                }
            }
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            inject: true,
            template: path.resolve(__dirname, "templates", "index.html")
        })
    ]
};
