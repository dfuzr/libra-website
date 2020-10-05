const {backToHome, getReference} = require('./components');

const Sidebar = [
  backToHome,
  {
    extra: {
      classNames: ['categoryLabel'],
      icon: 'img/move.svg',
      iconDark: 'img/move-dark.svg',
      iconClasses: ['iconLeft'],
      noLink: true,
    },
    id: 'tutorials/overview',
    type: 'doc',
  },
  {
    extra: {classNames: ['categoryIndex']},
    href: '/docs/tutorials/overview',
    label: 'Overview',
    type: 'link',
  },
  {
    extra: {iconClasses: ['listTitle']},
    label: 'Get Started',
    type: 'category',
    items: [
      'tutorials/my-first-transaction',
      'tutorials/my-first-client',
      'tutorials/query-the-blockchain',
      'tutorials/run-local-network',
    ]
  },
  {
    extra: {iconClasses: ['listTitle']},
    label: 'Libra Reference Wallet',
    type: 'category',
    items: [
      'tutorials/public-demo-wallet',
      {
        extra: {iconClasses: ['listTitle']},
        label: 'Try the Libra Reference Wallet',
        type: 'category',
        items: [
          'tutorials/try-local-web-wallet',
          'tutorials/try-local-mobile-wallet',
        ]
      },
      'tutorials/try-wallet-admin',
      'tutorials/set-up-for-development',
    ]
  },
  {
    extra: {iconClasses: ['listTitle']},
    label: 'Libra Reference Merchant',
    type: 'category',
    items: [
      'tutorials/try-demo-merchant',
      'tutorials/local-merchant-store',
      'tutorials/payment-mgmt',
      'tutorials/set-up-for-development',
    ]
  },
  getReference(),
];

module.exports = Sidebar;
