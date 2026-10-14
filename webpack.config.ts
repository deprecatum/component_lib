import path from "node:path";
import { fileURLToPath } from "node:url";
import webpack from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const entries: Record<string, string> = {
    index: "./src/index.ts",
}

const srcDir = path.resolve(__dirname, 'src');
const addComponentEntries = (directory: string) => {
  const files = fs.readdirSync(directory, { withFileTypes: true });
  const entryFile = files.find((file) => file.name === 'index.tsx');

  if (entryFile) {
    const entryName = path.relative(__dirname + "/src", directory).split(path.sep).join('/');
    entries[entryName] = path.join(directory, entryFile.name);
  }

  files
    .filter((file) => file.isDirectory())
    .forEach((directoryEntry) => {
      addComponentEntries(path.join(directory, directoryEntry.name));
    });
};

fs.readdirSync(srcDir, { withFileTypes: true })
  .filter((file) => file.isDirectory())
  .forEach((directory) => {
    addComponentEntries(path.join(srcDir, directory.name));
  });


const config: webpack.Configuration = {
    mode:"production",
    entry: entries,
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
        filename: (pathData) => {
            return pathData.chunk.name === 'index' ? 'index.js' : '[name]/index.js';
        },
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