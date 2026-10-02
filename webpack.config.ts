import path from "node:path";
import { fileURLToPath } from "node:url";
import webpack from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: webpack.Configuration = {
    mode:"production",
    entry: "./src/index.ts",
    experiments: {
		outputModule: true
	},
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: ["/node_modules/"],
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
		module: true,
		library: {
			type: 'module'
		},
		chunkFormat: 'module'
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

export default config;