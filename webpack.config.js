const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./frontend/src/index.js",
  output: {
    filename: 'bundle.js',
    path: __dirname + '/_dist'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { "targets": { node: "6" } }], '@babel/preset-react'],
            plugins: [
              ["@babel/plugin-proposal-class-properties", { loose: true }]
            ]
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./frontend/src/index.html",
      filename: "./index.html"
    })
  ]
};
