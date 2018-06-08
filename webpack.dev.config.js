const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const laravelWatchHawtness = require('./build/laravel-detect-hawtness');


module.exports = (env, options) => {
    const isProduction = options.mode === 'production';
    const sccUseOpts = (options.hot) ? [
        'style-loader',
        'css-loader',
        'sass-loader'
    ] : ExtractTextPlugin.extract({
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
    });

    const plugins = [
        new ExtractTextPlugin({
            filename: './css/[name].css',
        }),
        // new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new laravelWatchHawtness({
            isHot: options.hot,
        }),
    ];

    return {
        devtool: 'inline-cheap-source-map',
        devServer: {
            hot: true,
            contentBase: path.resolve(__dirname, 'public'),
        },
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
                    use: sccUseOpts,
                },

            ]
        },
        plugins: [
           ...plugins
        ],
        entry: {
            app: './resources/assets/app',
            splash: './resources/assets/welcome',
        },
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: 'js/[name].js',
            // hotUpdateChunkFilename: 'hot-update/hot-update.js',
            // hotUpdateMainFilename: 'hot-update/hot-update.json'
        },
    };
};
