module.exports = {
  mode: 'development',
  devServer: {
    port: 9000,
    contentBase: 'public',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
