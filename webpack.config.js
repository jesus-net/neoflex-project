const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

let pages = ['index', 'main-page', 'auth'];
const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';



module.exports = {
    mode: mode,
    context: path.resolve(__dirname, "src"),
    target: process.env.NODE_ENV === "development" ? "web" : "browserslist",
    devtool: process.env.NODE_ENV === "development" ? "source-map" : false,
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: mode === 'production' ? '[name].[contenthash].js' : '[name].js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: mode === 'production' ? '[name].[contenthash].css' : '[name].css'
        }),
        new HtmlWebpackPlugin({
            title: 'React && Webpack',
            template: './index.html',
            favicon: './assets/favicon/favicon.ico'
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'src/assets/img'),
                to: path.resolve(__dirname, 'prod/img'),
            }]
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3000,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    (mode === 'development') ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            //option
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash][ext]',
                }
            },
            {
                test: /\.(ttf|woff|woff2|eot|svg|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[hash][ext]',
                },
            },
            {
                test: /\.pug$/,
                use: 'pug-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@img': path.resolve(__dirname, './src/assets/img'),
            '@components': path.resolve(__dirname, './src/components'),
            '@UI': path.resolve(__dirname, './src/components/UI'),
            '@Form': path.resolve(__dirname, './src/components/Form'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@store': path.resolve(__dirname, './src/store')
        },
    }
}