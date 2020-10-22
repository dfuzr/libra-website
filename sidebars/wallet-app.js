const {category, categoryBoilerplate, getReference} = require('./components');

const Sidebar = [
  ...categoryBoilerplate('wallet-app/overview', 'wallet-app'),
  category('Libra Reference Wallet', [
    category('Concepts', [
      'wallet-app/intro-to-lrw',
      'wallet-app/libra-coin-sourcing',
    ]),
    category('Tutorials', [
      'wallet-app/public-demo-wallet',
      category('Test the Libra Reference Wallet', [
          'wallet-app/try-local-web-wallet',
          'wallet-app/try-local-mobile-wallet',
      ]),
      'wallet-app/set-up-for-development'
    ]),
  ]),
  getReference(),
];

module.exports = Sidebar;

