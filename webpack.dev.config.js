const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const laravelWatchHawtness = require('./build/laravel-detect-hawtness');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
                    importLoader: 1,
                    modules: true,
                    localIdentName: '[name]_[local]__[hash:base64:5]'
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
        new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        new laravelWatchHawtness({
            isHot: options.hot,
        }),
        // new BundleAnalyzerPlugin({
        //     analyzerMode: 'static'
        // })
    ];

    return {
        devtool: isProduction ? 'none' : 'inline-cheap-source-map',
        devServer: {
            // hot: true,
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
                {
                    // test
                    test: /\.css$/,
                    exclude: /node_modules/,
                    loaders: [
                        'style-loader',
                        'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
                    ]
                },
            ]
        },
        plugins: [
           ...plugins
        ],
        entry: {
            app: './resources/assets/app',
            welcome: './resources/assets/welcome',
        },
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: 'js/[name].js',
            // hotUpdateChunkFilename: 'hot-update/hot-update.js',
            // hotUpdateMainFilename: 'hot-update/hot-update.json'
        },
    };
};
