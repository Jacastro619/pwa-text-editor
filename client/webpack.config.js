const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// add plugins injectmanifest, htmlwebpackplugin, pwamanifest
// TODO: Add CSS loaders and babel to webpack.
// add rules to the webpack configuration. css-loader, babel-loader, style-loader
// properties for manifest: name, shortname, start_url, background color, theme color, icon, description, publicPath, inject, fingerprints.
module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [],

    module: {
      rules: [],
    },
  };
};