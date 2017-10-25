const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: resolve(__dirname, 'src'),
    entry: [
        './main.js'
        // the entry point of our app
    ],
    output: {
        filename: 'main.js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {test: /\.js$/ , use:'babel-loader', exclude: '/node_modules/'},
            {
                test: /\.scss$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                        use: [
                            {
                                loader: "css-loader" // translates CSS into CommonJS
                            },
                            {
                                loader: "sass-loader" // compiles Sass to CSS
                            }
                        ],
                        fallback: "style-loader" // used when css not extracted
                    }
                ))
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                use: 'url-loader'
            },

           {
                test: require.resolve('./src/main'),
                loaders: ["expose-loader?reactapp", "babel-loader?presets[]=react,presets[]=es2015"]
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates

        new ExtractTextPlugin({filename: 'styles.css', allChunks: true}),
        //
        // new webpack.ProvidePlugin({
        //   init: require.resolve('./src/scripts/main'),
        //   // ...
        // })
    ],
};
