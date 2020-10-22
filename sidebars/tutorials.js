const {category, categoryBoilerplate, getReference} = require('./components');

const Sidebar = [
  ...categoryBoilerplate('tutorials/overview', { url: 'cog', type: 'png' }),
  category('Get Started', [
    'tutorials/my-first-transaction',
    'tutorials/my-first-client',
    'tutorials/query-the-blockchain',
    'tutorials/run-local-network',
  ]),
  category('Libra Reference Wallet', [
    'tutorials/public-demo-wallet',
    category('Try the Libra Reference Wallet', [
      'tutorials/try-local-web-wallet',
      'tutorials/try-local-mobile-wallet',
    ]),
    'tutorials/try-wallet-admin',
    'tutorials/set-up-for-development',
  ]),
  category('Libra Reference Merchant', [
      'tutorials/try-demo-merchant',
      'tutorials/local-merchant-store',
      'tutorials/payment-mgmt',
      'tutorials/set-up-for-development',
  ]),
  getReference(),
];

module.exports = Sidebar;
