const path = require('path');
const webpack = require('webpack');

module.exports = () =>
    // const isProduction = options.mode === 'production';

    // const sassGlobalStyleOptions = options.hot
    //     ? ['style-loader', 'css-loader', 'sass-loader']
    //     : ExtractTextPlugin.extract({
    //           fallback: 'style-loader',
    //           use: [
    //               {
    //                   loader: 'css-loader',
    //                   options: {
    //                       minimize: isProduction,
    //                   },
    //               },
    //               {
    //                   loader: 'sass-loader',
    //               },
    //           ],
    //       });

    // const cssModuleStyleOptions = options.hot
    //     ? [
    //           'style-loader',
    //           'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
    //           'sass-loader',
    //       ]
    //     : ExtractTextPlugin.extract({
    //           fallback: 'style-loader',
    //           use: [
    //               'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
    //               'sass-loader',
    //           ],
    //       });

    // const plugins = [
    //     new ExtractTextPlugin({
    //         filename: './css/[name].css',
    //     }),
    //     new webpack.NamedModulesPlugin(),
    //     // new webpack.HotModuleReplacementPlugin(),
    //     new laravelWatchHawtness({
    //         isHot: options.hot,
    //     }),
    //     // new webpack.ProvidePlugin({
    //     //     $: 'jquery',
    //     //     jQuery: 'jquery',
    //     //     Popper: 'popper.js',
    //     //     axios: 'axios',
    //     // }),
    //     new BundleAnalyzerPlugin({
    //         // analyzerMode: 'static',
    //     }),
    // ];

    ({
        // devServer: {
        //     // inline: true,
        //     hot: true,
        //     // contentBase: './public/entry.js',
        // },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                // {
                //     // global.scss - normal ones
                //     test: /\.global\.scss$/,
                //     use: sassGlobalStyleOptions,
                // },
                // {
                //     // Hipster CSS modules
                //     test: /^((?!\.global).)*\.scss$/,
                //     use: cssModuleStyleOptions,
                // },
            ],
        },
        // plugins: [new webpack.HotModuleReplacementPlugin()],
        entry: [
            // 'webpack-dev-server/client?http://localhost:8080',
            // 'webpack/hot/dev-server',
            './entry.js',
        ],
        output: {
            filename: 'poop.js',
        },
    });
