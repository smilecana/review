module.exports = {
    entry: '../javascript/es6/script.js',
    output: { filename: 'bundle.js' },
    module: {
        rules: [
            {
                test: /\.js?/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['env']
                }
            }
        ]
    }
};