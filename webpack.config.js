  path = require("path"),
  webpack = require("webpack"),
  HTMLWebpackPlugin = require("html-webpack-plugin"),
  CopyWebpackPlugin = require("copy-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isDev = process.env.NODE_ENV === "development", isProd = !isDev;

let pages = ["index"];

const plugins = [];

if (isProd) { 
  plugins.push(
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFileName: "[id].css",
    })
  );
}

const entryFiles = (arr) => {
  let entrys = {};
  for (let page of arr) {
    entrys[page] = `@components/${page}/${page}.js`;
  }
  return entrys;
};

for (let page of pages) {
  plugins.push(
    new HTMLWebpackPlugin({
      filename: `${page}.html`,
      template: `./pages/${page}.pug`,
      chunks: [`${page}`],
    })
  );
}

plugins.push(
  new CopyWebpackPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, "src/assets/img"),
        to: path.resolve(__dirname, "dist/img"),
      },
    ],
  })
);




module.exports = {
  mode: isDev ? "development" : "production",
  context: path.resolve(__dirname, "src"),
  target: process.env.NODE_ENV === "development" ? "web" : "browserslist",
  devtool: isDev ? "source-map" : false,

  entry: entryFiles(pages),

  output: {
    filename: "js/[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  resolve: {
    extensions: [".js", ".json"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },

  optimization: {
    minimize: isProd,
    minimizer: [
      `...`,
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: {
                removeAll: true,
              },
            },
          ],
        },
        sourceMap: isDev,
      }),
    ],
    splitChunks: {
      chunks: "all",
    },
  },

  devServer: {
    port: 8888,
    contentBase: path.resolve(__dirname, "dist"),
    open: true,
    hot: isDev,
  },

  plugins,

  module: {
    rules: [
      {
        test: /\.html$/,
        type: "asset/resource",
        generator: {
          filename: "[name][ext]",
        },
      },
      {
        test: /\.html$/i,
        use: ["extract-loader", "html-loader"],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          isDev ? "style-loader" : {
                loader: MiniCssExtractPlugin.loader,
              },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext]",
        },
      },
      {
        test: /\.(ttf|woff|woff2|eot|svg|otf)$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext]",
        },
      },
      {
        test: /\.pug$/,
        use: "pug-loader",
      },
    ],
  },
};
