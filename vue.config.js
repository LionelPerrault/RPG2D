const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
        shared: path.resolve(__dirname, 'server/shared'),
        root: path.resolve(__dirname, process.env.NODE_ENV === 'production' ? 'build/' : 'server/'),
      },
      extensions: ['.js'],
    },
  },
};

