const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: {
        // Background Scripts
        background: './src/ts/background.ts',
        inject: './src/ts/inject.ts',

        // Page Helper Scripts
        recordings: './src/ts/recordings.ts',
        video: './src/ts/video.ts',

        // Easel React App
        reactapp: './src/ts/app.tsx',
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true
                        }
                    }
                ]
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new CopyPlugin({
            patterns: [{
                from: 'node_modules/webextension-polyfill/dist/browser-polyfill.js',
                to: 'browser-polyfill.js'
            }],
        })
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'src/dist'),
    }
};