const {backToHome, getReference} = require('./components');

const Sidebar = [
   backToHome,
  {
    extra: {
      classNames: ['categoryLabel'],
      icon: 'img/wallet-app.svg',
      iconDark: 'img/wallet-app-dark.svg',
      iconClasses: ['iconLeft'],
    },
    id: 'wallet-app/overview',
    type: 'doc',
  },
  {
    extra: {
      classNames: ['categoryIndex'],
    },
    href: '/docs/wallet-app/overview',
    label: 'Overview',
    type: 'link',
  },
  {
    extra: {
      iconClasses: ['listTitle'],
    },
    label: 'Concepts',
    type: 'category',
    items: [
      'wallet-app/intro-to-lrw',
      'wallet-app/wallet-arch',
      'wallet-app/libra-c-source',
    ]
  },
  {
    extra: {
      iconClasses: ['listTitle'],
    },
    label: 'Tutorials',
    type: 'category',
    items: [
      'wallet-app/public-demo-wallet',
      'wallet-app/try-local-web-wallet',
      'wallet-app/try-local-mobile-wallet',
      'wallet-app/try-wallet-admin',
    ]
  },
  {
    extra: {
      iconClasses: ['listTitle'],
    },
    label: 'Develop',
    type: 'category',
    items: [
      'wallet-app/set-up-reference-wallet',
      'wallet-app/login-and-auth',
      'wallet-app/custody-mod',
      'wallet-app/compliance-mod',
      'wallet-app/risk-mod',
      'wallet-app/trxn-wf',
      'wallet-app/storage-mod',
      'wallet-app/service-api',
      'wallet-app/pubsub',
      'wallet-app/inventory-mod',
      'wallet-app/localizn',
      'wallet-app/demo-wallet',
      // 'wallet-app/demo-wallet-swagger-api',
    ]
  },
  getReference(),
];

module.exports = Sidebar;

