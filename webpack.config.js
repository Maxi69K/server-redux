const path = require('path')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: { filename: 'bundle.js', path: path.resolve(__dirname, 'dist') },
  devServer: { static: path.join(__dirname, 'dist'), port: 9000 },
}

// Ako port ne napisemo vrednost po defaultu ce biti 8080