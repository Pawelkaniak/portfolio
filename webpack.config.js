const path = require('path');

module.exports = {
    entry: "./public/js/app.js",
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
                    presets: ['env']
                }
            }
        ]
    },
    watch: true
}