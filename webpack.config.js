const path = require('path');

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
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ["env", "react"]
                }
            }
        ]
    },
    watch: true
};