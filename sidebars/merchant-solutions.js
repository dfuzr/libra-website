const {category, categoryBoilerplate, getReference, standaloneLink} = require('./components');

const Sidebar = [
  ...categoryBoilerplate('merchant/overview', 'merchant-solutions'),
  standaloneLink('merchant/merchant-guide'),
  category('Libra Reference Merchant', [
    category('Concepts', [
        'merchant/lrm-concepts'
    ]),
    category('Tutorials', [
      'merchant/try-demo-merchant',
      'merchant/local-merchant-store',
      'merchant/payment-mgmt',
      'merchant/set-up-for-development'
    ]),
    category('Develop', [
      'merchant/develop-lrm'
    ]),
  ]),
  ...getReference(),
];

module.exports = Sidebar;
