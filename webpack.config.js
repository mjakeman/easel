const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        // Background Scripts
        background: './src/background.ts',
        inject: './src/inject.ts',

        // Page Helper Scripts
        recordings: './src/recordings.ts',
        video: './src/video.ts',

        // Easel React App
        reactapp: './src/app.tsx',
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
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
};