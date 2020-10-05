const path = require('path');

module.exports = function(context, options) {
  return {
    name: 'alias-plugin',
    configureWebpack(config, isServer, utils) {
      const {getCacheLoader} = utils;
      return {
        resolve: {
          alias: {
            CSS: path.resolve(__dirname, '../../../src/css'),
            components: path.resolve(__dirname, '../../../src/components'),
            docs: path.resolve(__dirname, '../../../docs'),
            img: path.resolve(__dirname, '../../../static/img'),
            src: path.resolve(__dirname, '../../../src'),
            react: path.resolve('./node_modules/react'),
          }
        },
        module: {
          rules: [
            {
              test: /\.svg$/,
              use: ['@svgr/webpack'],
            },
          ],
        },
      };
    },
  };
};
