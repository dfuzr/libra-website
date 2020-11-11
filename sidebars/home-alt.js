const {getReference} = require('./components');

const Sidebar = [
  {
    type: 'doc',
    id: 'welcome-to-libra',
    extra: {
      classNames: ['home'],
      icon: 'img/home.svg',
      iconDark: 'img/home-dark.svg',
    },
  },
  {
    type: 'category',
    label: 'Concepts',
    items: [
      {
        type: 'ref',
        id: 'core/overview',
        extra: {
          classNames: ['iconIndented'],
          icon: 'img/core-contributors.svg',
          iconDark: 'img/core-contributors-dark.svg',
        },
      },
      {
        type: 'ref',
        id: 'merchant/overview',
        extra: {
          classNames: ['iconIndented'],
          icon: 'img/merchant-solutions.svg',
          iconDark: 'img/merchant-solutions-dark.svg',
        },
      },
      {
        type: 'ref',
        id: 'wallet-app/overview',
        extra: {
          classNames: ['iconIndented'],
          icon: 'img/wallet-app.svg',
          iconDark: 'img/wallet-app-dark.svg',
        },
      },
      {
        type: 'ref',
        id: 'move/overview',
        extra: {
          classNames: ['iconIndented'],
          icon: 'img/move.svg',
          iconDark: 'img/move-dark.svg',
        },
      },
      {
        type: 'ref',
        id: 'node/overview',
        extra: {
          classNames: ['iconIndented'],
          icon: 'img/node-operators.svg',
          iconDark: 'img/node-operators-dark.svg',
        },
      }
    ],
  },
  {
    type: 'category',
    label: 'Tutorials',
    items: [
     {
        type: 'doc',
        id: 'core/my-first-transaction',
      },
      {
        type: 'ref',
        id: 'core/my-first-client',
      },
      {
        type: 'ref',
        id: 'wallet-app/public-demo-wallet',
      },
      {
        type: 'ref',
        id: 'wallet-app/try-local-web-wallet',
      },
      {
        type: 'ref',
        id: 'wallet-app/try-local-mobile-wallet',
      },
      {
        type: 'ref',
        id: 'wallet-app/try-wallet-admin',
      },
            {
        type: 'ref',
        id: 'merchant/local-merchant-store',
      },
            {
        type: 'ref',
        id: 'merchant/try-demo-merchant',
      },
            {
        type: 'ref',
        id: 'core/run-local-network',
      },
    ]
  },
  {
    type: 'category',
    label: 'Develop',
    items: [
     {
        type: 'ref',
        id: 'core/contributing',
      },
      {
        type: 'ref',
        id: 'core/coding-guidelines',
      },
      {
        type: 'ref',
        id: 'core/libra-cli',
      },
    ]
  },
  {
    label: 'SDKs',
    type: 'category',
    items: [
      {
        type: 'link',
        href: 'https://github.com/libra/libra-client-sdk-cplusplus',
        label: 'C++',
      },
      {
        type: 'link',
        href: 'https://github.com/libra/libra-client-sdk-csharp',
        label: 'C#',
      },
      {
        type: 'link',
        href: 'https://github.com/libra/libra-client-sdk-go',
        label: 'Go',
      },
      {
        type: 'link',
        href: 'https://github.com/libra/libra-client-sdk-java',
        label: 'Java',
      },
      {
        type: 'link',
        href: 'https://github.com/libra/libra-client-sdk-python',
        label: 'Python',
      },
      {
        type: 'link',
        href: 'https://github.com/libra/libra-client-sdk-typescript',
        label: 'TypeScript',
      },
    ]
  },
  ...getReference('primary'),
];
module.exports = Sidebar;
      /*

        id: 'core/my-first-transaction',
        extra: {
          classNames: ['iconIndented'],
          icon: 'img/core-contributors.svg',
          iconDark: 'img/core-contributors-dark.svg',
        },
      },
      {
        type: 'doc',
        id: 'core/my-first-client',
        /*extra: {
          classNames: ['iconIndented'],
          icon: 'img/core-contributors.svg',
          iconDark: 'img/core-contributors-dark.svg',
        },
      },
      {
        type: 'doc',
        id: 'wallet-app/public-demo-wallet',
        /*extra: {
          classNames: ['iconIndented'],
          icon: 'img/wallet-app.svg',
          iconDark: 'img/wallet-app-dark.svg',
        },
      },
      {
        type: 'doc',
        id: 'wallet-app/try-local-web-wallet',
        extra: {
          classNames: ['iconIndented'],
          icon: 'img/wallet-app.svg',
          iconDark: 'img/wallet-app-dark.svg',
        },
      },
      {
        type: 'doc',
        id: 'wallet-app/try-local-mobile-wallet',
        extra: {
          classNames: ['iconIndented'],
          icon: 'img/wallet-app.svg',
          iconDark: 'img/wallet-app-dark.svg',
        },
      },
      {
        type: 'doc',
        id: 'merchant/local-merchant-store',
        extra: {
          classNames: ['iconIndented'],
          icon: 'img/merchant-solutions.svg',
          iconDark: 'img/merchant-solutions-dark.svg',
        },
      },
      {
        type: 'doc',
        id: 'merchant/payment-mgmt',
        extra: {
          classNames: ['iconIndented'],
          icon: 'img/merchant-solutions.svg',
          iconDark: 'img/merchant-solutions-dark.svg',
        },
      },
      {
        type: 'doc',
        id: 'merchant/try-demo-merchant',
        extra: {
          classNames: ['iconIndented'],
          icon: 'img/merchant-solutions.svg',
          iconDark: 'img/merchant-solutions-dark.svg',
        },
      },*/


/*

  {
    extra: {
      icon: 'img/core-contributors.svg',
      iconDark: 'img/core-contributors-dark.svg',
      iconClasses: ['listTitle'],
    },
    label: 'Developing',
    type: 'category',
    items: [
      {
        type: 'link',
        href: 'https://github.com/orgs/libra/projects/1',
        label: 'Roadmap',
      },
      'core/libra-open-source-paper',
      'core/contributing',
      'core/coding-guidelines',
      'core/libra-cli',
    ]
  },
  {
    extra: {
      icon: 'img/develop.svg',
      iconDark: 'img/develop-dark.svg',
      iconClasses: ['listTitle'],
    },
    label: 'SDKs',
    type: 'category',
    items: [
      {
        type: 'link',
        href: 'https://github.com/libra/libra-client-sdk-cplusplus',
        label: 'C++',
      },
      {
        type: 'link',
        href: 'https://github.com/libra/libra-client-sdk-csharp',
        label: 'C#',
      },
      {
        type: 'link',
        href: 'https://github.com/libra/libra-client-sdk-go',
        label: 'Go',
      },
      {
        type: 'link',
        href: 'https://github.com/libra/libra-client-sdk-java',
        label: 'Java',
      },
      {
        type: 'link',
        href: 'https://github.com/libra/libra-client-sdk-python',
        label: 'Python',
      },
      {
        type: 'link',
        href: 'https://github.com/libra/libra-client-sdk-typescript',
        label: 'TypeScript',
      },
    ]
  },
  ...getReference('primary'),
];
*/
