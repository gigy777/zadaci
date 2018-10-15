const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "stage-0"]
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader"
        }
      }
    ]
  },
  devServer: {
    publicPath: "/",
    historyApiFallback: true,
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 8080
  }
  //   watch: [
  //     "templates/**/*.html",
  //     "src/**/*.js"
  //   ],
};
