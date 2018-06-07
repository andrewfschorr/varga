const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const fs = require('fs');

function HelloWorldPlugin(options) {
    // Setup the plugin instance with options...
}

HelloWorldPlugin.prototype.apply = function(compiler) {
    compiler.plugin('done', function() {
        console.log('Hello KJGDFJGDSFJGSDFWorld!');
    });
};


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

    if (options.hot) {
        fs.writeFile(path.join(path.resolve('public'), 'hot'), 'hawtness', function(err) {
            if(err) {
                return console.log(err);
            }
        });
    }

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
            new ExtractTextPlugin({
                filename: './css/[name].css',
            }),
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new HelloWorldPlugin({options: true}),
        ],
        entry: {
            app: [
                './resources/assets/app', // index.js
            ],
        },
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: 'js/[name].js',
        },
    };
};