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
    label: 'Libra Reference Wallet',
    type: 'category',
    items: [
      {
        extra: {
          iconClasses: ['listTitle'],
        },
        label: 'Concepts',
        type: 'category',
        items: [
          'wallet-app/intro-to-lrw',
          'wallet-app/libra-coin-sourcing',
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
          {
            extra: {
              iconClasses: ['listTitle'],
            },
            label: 'Test the Libra Reference Wallet',
            type: 'category',
            items: [
              'wallet-app/try-local-web-wallet',
              'wallet-app/try-local-mobile-wallet',
            ]
          },
          'wallet-app/set-up-for-development'
        ]
      },
    ],
  },
  getReference(),
];

module.exports = Sidebar;

