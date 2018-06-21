const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const laravelWatchHawtness = require('./build/laravel-detect-hawtness');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function buildEntryPoint(entryPoint, isHot = false) {
    if (!isHot) {
        // TODO this sucks
        return entryPoint;
    }
    return [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        entryPoint,
    ];
}

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
        // new BundleAnalyzerPlugin({
        //     // analyzerMode: 'static',
        // }),
    ];

    return {
        devtool: isProduction ? 'none' : 'inline-cheap-source-map',
        devServer: {
            hot: true,
            publicPath: options.hot ? 'http://localhost:8080/' : '/', // hurr
            contentBase: path.resolve(__dirname, 'public'),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
            },
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
                components: path.resolve(__dirname, 'resources/client/components'),
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
                // {
                //     test: /\.css$/,
                //     use: cssModuleStyleOptions,
                // },
            ],
        },
        plugins: [...plugins],
        entry: {
            app: buildEntryPoint('./resources/client/app', options.hot),
            welcome: buildEntryPoint('./resources/client/welcome', options.hot),
            loginregister: buildEntryPoint('./resources/client/loginregister', options.hot),
            home: buildEntryPoint('./resources/client/home', options.hot),
            // vendor: ['jquery', 'react', 'react-dom', 'lodash', 'popper.js', 'axios', 'bootstrap', 'reactstrap'],
            vendor: ['react', 'react-dom', 'lodash', 'axios', 'reactstrap'],
        },
        output: {
            path: path.resolve(__dirname, 'public'),
            publicPath: options.hot ? 'http://localhost:8080/' : '/',
            filename: 'js/[name].js',
            // hotUpdateChunkFilename: '[name].[hash].hot-update.js',
            // hotUpdateMainFilename: '[hash].hot-update.json',
        },
    };
};
