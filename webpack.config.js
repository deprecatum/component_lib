const path = require("path");

module.exports= {
    mode:"production",
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ],
    },
    resolve: {
        extensions: ['.tsx'],
    },
    output: {  
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: {
            name: "@deprecatum/component_lib",
            type: "umd",
        },
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom',
    },
}