const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const laravelWatchHawtness = require('./build/laravel-detect-hawtness');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env, options) => {
    const isProduction = options.mode === 'production';

    const sassGlobalStyleOptions = options.hot
        ? ['style-loader', 'css-loader', 'sass-loader']
        : ExtractTextPlugin.extract({
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

    const cssModuleStyleOptions = options.hot
        ? [
              'style-loader',
              'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
              'sass-loader',
          ]
        : ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                  'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                  'sass-loader',
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
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery',
        //     Popper: 'popper.js',
        //     axios: 'axios',
        // }),
        new BundleAnalyzerPlugin({
            // analyzerMode: 'static',
        }),
    ];

    return {
        devtool: isProduction ? 'none' : 'inline-cheap-source-map',
        devServer: {
            // hot: true,
            contentBase: path.resolve(__dirname, 'public'),
        },
        resolve: {
            // modules: [
            //     'node_modules',
            //     './resouces/client/app',
            //     './resouces/client',
            // ],
            alias: {
                client: path.resolve(__dirname, 'resources/client'),
                app: path.resolve(__dirname, 'resources/client/app'),
            },
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendor',
                        chunks: 'all',
                    },
                },
            },
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
                    // global.scss - normal ones
                    test: /\.global\.scss$/,
                    use: sassGlobalStyleOptions,
                },
                {
                    // Hipster CSS modules
                    test: /^((?!\.global).)*\.scss$/,
                    use: cssModuleStyleOptions,
                },
            ],
        },
        plugins: [...plugins],
        entry: {
            app: './resources/client/app',
            welcome: './resources/client/welcome',
            loginregister: './resources/client/loginregister',
            // vendor: ['jquery', 'react', 'react-dom', 'lodash', 'popper.js', 'axios', 'bootstrap', 'reactstrap'],
            vendor: ['react', 'react-dom', 'lodash', 'axios', 'reactstrap'],
        },
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: 'js/[name].js',
            // hotUpdateChunkFilename: 'hot-update/hot-update.js',
            // hotUpdateMainFilename: 'hot-update/hot-update.json'
        },
    };
};
