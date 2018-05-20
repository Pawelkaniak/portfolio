const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: "./src/js/React/App.js",
    output: {
        path: path.join(__dirname + "/public/js/"),
        filename: "bundle.js",
        publicPath: '/js/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader', 
                query: {
                    presets: ["react", "env" ,"stage-0"]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    watch: true
};