const path = require("path");   
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

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
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: true,
                                localIdentName: '[local]',
                            },
                            esModule: false,
                        },
                    }
                ]
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({filename: 'main.module.css'}),
    ],  
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
        globalObject: 'this',
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom',
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
}