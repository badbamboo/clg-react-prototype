const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@src': path.resolve(__dirname, 'src/'),
      '@images': path.resolve(__dirname, 'src/images/')
    },
  },
};