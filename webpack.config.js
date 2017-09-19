var path = require("path");
module.exports = {
  context: __dirname,
  entry: "./frontend/onetouch_bnb.jsx",
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          preset: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
};
