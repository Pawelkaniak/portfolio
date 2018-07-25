const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const postcssAssets = require('postcss-assets');
//const postcssNext = require('postcss-cssnext');

module.exports = {
    mode: 'none',
    entry: "./src/js/React/App.js",
    output: {
        path: path.join(__dirname + "/public/js/"),
        filename: "bundle.js",
        publicPath: '/js/'
    },
    resolve: {
        extensions: [ '.js', '.json', '.css', '.scss' ],
        modules: ['node_modules']    
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
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                loaders: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]_[local]_[hash:base64:5]',
                        }
                    },

                    {
                        loader: "sass-loader",
                    }
                ]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],
    watch: true
};