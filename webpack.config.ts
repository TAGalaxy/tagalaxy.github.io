import * as path from "path";
import * as webpack from "webpack";
// @ts-ignore
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const config: webpack.Configuration = {
  mode: "development",
  entry: path.resolve(__dirname, "src/main.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].build.js",
  },
  module: {
    rules: [
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(jpe?g|png|gif|webp|svg)/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".vue", ".js", ".json"],
    alias: {
      "@": "/src",
      assets: "@/assets", //设置静态资源文件assets别名
      components: "@/components", //设置组件别名
      utils: "@/utils", //设置第三方应用别名
      views: "@/views", //设置视图别名
    },
  },
  plugins: [new HtmlWebpackPlugin(), new VueLoaderPlugin()],
};
module.exports = config;
