const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        course: './src/course.ts',
        easel: './src/easel.ts',
        background: './src/background.ts',
        videoenhance: './src/videoenhance.ts'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
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