const path = require('path');

module.exports = function(context, options) {
  return {
    name: 'custom-webpack-plugin',
    configureWebpack(config, isServer, utils) {
      const {getCacheLoader} = utils;
      return {
        resolve: {
          alias: {
            '@libra/client': path.resolve(__dirname, '../../libra-client-sdk-typescript'),
            CSS: path.resolve(__dirname, '../../src/css'),
            components: path.resolve(__dirname, '../../src/components'),
            docs: path.resolve(__dirname, '../../docs'),
            img: path.resolve(__dirname, '../../static/img'),
            'libra-cli': path.resolve(__dirname, '../../libra-cli/src'),
            react: path.resolve('./node_modules/react'),
            src: path.resolve(__dirname, '../../src'),
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
        node: {
          module: 'empty',
          dgram: 'empty',
          dns: 'mock',
          fs: 'empty',
          http2: 'empty',
          net: 'empty',
          tls: 'empty',
          child_process: 'empty',
        },
      };
    },
  };
};
