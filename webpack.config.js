const path = require('path');

module.exports = {
  target: 'webworker',
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'worker.js',
  },
};
