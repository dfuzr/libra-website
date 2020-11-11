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
    label: '',
    type: 'category',
    items: [
      'wallet-app/wallet-guide',
    ]
  },
    {
    label: 'Libra Reference Wallet',
    type: 'category',
    items: [
      'wallet-app/intro-to-lrw',
      'wallet-app/develop-reference-wallet'
    ]
  },
    ...getReference(),
];

module.exports = Sidebar;
