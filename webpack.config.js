const path = require('path');

module.exports = {
  mode: "production",
  context: __dirname,
  stats: "verbose",
  entry: {
    main: "./src/ReactTimer.tsx",
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    extensionAlias: {
      '.ts': ['.js', '.ts'],
      '.cts': ['.cjs', '.cts'],
      '.mts': ['.mjs', '.mts'],
    },
  },
  module: {
    rules: [
      { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" },
      { test: /\.js$/, enforce: "pre", loader: "source-map-loader" }
    ]
  }
};