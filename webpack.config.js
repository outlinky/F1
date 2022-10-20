const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MinimizeCssWebpackPlugin = require('css-minimizer-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');


let config = {
    entry: path.resolve('src', 'index.js'),
    output: {
        path: path.resolve('dist'),
        filename: '[name].[contenthash].js'
    },
    resolve: {
        alias: {
            '@root': path.resolve(),
            '@src': path.resolve('src'),
            '@js': path.resolve('src/js'),
            '@components': path.resolve('src/components'),
            '@styles': path.resolve('src/styles'),
            '@fonts': path.resolve('src/fonts'),
            '@images': path.resolve('src/images')
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        runtimeChunk: 'single'
    },
    devServer: {
        port: 4040,
        watchFiles: [path.resolve('src/*.html')]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: path.resolve('node_modules'),
                use: {
                    loader: "babel-loader",
                    options:{
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ],
    }
}

module.exports = (env, argv) => {
    if(argv.mode === 'development'){
        config.mode = 'development';
        config.devtool = 'source-map';
        config.plugins.push(new HtmlWebpackPlugin({
            template: path.resolve('src/index.html'),
            scriptLoading: 'blocking',
            favicon: path.resolve('src/images/favicon.ico')
        }));
        config.plugins.push(new EslintWebpackPlugin());
        config.module.rules.push({
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        })
    }
    if(argv.mode === 'production'){
        config.mode = 'production';
        config.devServer.hot = false;
        config.optimization.minimize = true;
        config.optimization.minimizer = [new MinimizeCssWebpackPlugin(), '...'];
        config.plugins.push(new HtmlWebpackPlugin({
            template: path.resolve('src/index.html'),
            scriptLoading: 'blocking',
            favicon: path.resolve('src/images/favicon.ico'),
            minify: {
                collapseWhitespace: true
            }
        }));
        config.module.rules.push({
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        })
    }
    return config;
}