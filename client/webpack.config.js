const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

console.log(path.resolve(__dirname, "src/index.js"));
module.exports = {
    entry: ["webpack/hot/dev-server", "./src/index.js"],
    mode: "development",
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
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3001,
        publicPath: "http://localhost:3001/dist/",
        hot: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};
