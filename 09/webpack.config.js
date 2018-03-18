var webpack = require('webpack');
var path = require('path');

var debug = process.env.NODE_ENV !== "production";

module.exports = {
    context: path.join(__dirname),
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./src/js/root.jsx",
    output: {
        path: __dirname,
        filename: './src/bundle.js'
    },
    optimization: {

        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        }
    },

    module: {
        rules: [{
                test: /\.jsx?$/,
                // exclude: /(node_modules)/,

                loader: 'babel-loader',
                exclude: function (path) {
                    var isNpmModule = !!path.match(/(node_modules)/);
                    return isNpmModule;
                },
                query: {
                    presets: ['react', 'es2015'],

                },



            },
            {
                test: /\.css?$/,
                loader: 'style-loader!css-loader'
                //?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]
            }
        ]
    }


}