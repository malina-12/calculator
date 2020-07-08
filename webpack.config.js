const path = require('path');
const glob = require('glob');

const entryPoints = {
  'main': './src/index.js'
};

glob.sync("./src/Modules/*.js").forEach(f => {
  entryPoints[path.basename(f, '.js')] = f;
});

module.exports = {
  mode: 'production',
  output: {
    path: path.join(__dirname, 'dist')
  },
  entry: entryPoints,
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name() {
            return `vendor`;
          },
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
};
