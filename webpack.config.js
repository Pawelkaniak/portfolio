const path = require('path');

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
    devServer: {
        contentBase: path.join(__dirname + "/js/bundle.js"),
        compress: true,
        port: 9000
      },
    watch: true
};