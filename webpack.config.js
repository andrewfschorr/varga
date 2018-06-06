const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, options) => {
    const isProduction = options.mode === 'production';
    return {
        devtool: 'inline-cheap-source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    minimize: isProduction,
                                },
                            },
                            {
                                loader: 'sass-loader',
                            },
                        ],
                    }),
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    minimize: isProduction,
                                },
                            },
                        ],
                    }),
                },
            ],
        },
        plugins: [
            new ExtractTextPlugin({
                filename: '../styles/[name].css',
            }),
            // new webpack.optimize.CommonsChunkPlugin({
            //     name: 'vendor',
            // }),
            // new webpack.ProvidePlugin({
            //     $: 'jquery',
            //     jQuery: 'jquery',
            //     'window.jQuery': 'jquery',
            // }),
        ],
        // resolve: {
        //     modules: ['node_modules'],
        // },
        entry: {
            // TODO figure out a way to not manually list out all of them
            // JS
            // vendor: ['react', 'react-dom'],
            app: './resources/assets/js/app',
            // CSS
            // global: './resources/assets/sass/app.global.scss',
        },
        // output: {
        //     path: path.resolve('public/js'),
        //     filename: '[name].js',
        // },
    };
};

// module.exports = {
//     entry: './resources/assets/js/app.js',
//     output: {
//         filename: 'app.js',
//         path: path.resolve(__dirname, 'public/js/')
//     }
// };