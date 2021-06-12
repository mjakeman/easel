const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        course: './src/course.ts',
        easel: './src/easel.ts',
        background: './src/background.ts',
        videoenhance: './src/videoenhance.ts',
        inject: './src/inject.ts',
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