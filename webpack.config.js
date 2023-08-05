import singleSpaDefaults from "webpack-config-single-spa-react";
import { merge } from "webpack-merge";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "navbar",
    projectName: "vuexy-navbar",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    module: {
      rules: [
        // Add SCSS rule
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader"
          ],
        },
      ],
    },
    plugins: [
      // Add MiniCssExtractPlugin
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
    ],
    resolve: {
      extensions: ['.scss'], // Add the .scss extension for resolving imports
    },
  });
};