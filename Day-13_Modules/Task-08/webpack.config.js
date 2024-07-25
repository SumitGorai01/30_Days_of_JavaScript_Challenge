const path = require('path');

module.exports = {
  mode: 'development', // Set mode to 'development' or 'production'
  entry: './src/index.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Name of the bundled output file
    path: path.resolve(__dirname, 'dist'), // Directory where bundled file should be outputted
  },
};
