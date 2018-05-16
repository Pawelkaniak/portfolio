const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: "./src/js/React/app.js",
    output: {
        path: __dirname + "/public/js/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                //use: 
               // {
                    loader: 'babel-loader', 
              //  },
                query: {
                    presets: ["env", "react"]
                }
            }
        ]
    },
    watch: true
};