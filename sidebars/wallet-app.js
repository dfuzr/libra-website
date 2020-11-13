const {category, categoryBoilerplate, getReference} = require('./components');

const Sidebar = [
  ...categoryBoilerplate('wallet-app/overview', 'wallet-app'),
  category('Guides', [
    'wallet-app/wallet-guide',
  ]),
  category('Libra Reference Wallet', [
    category('Basics', [
      {
        type: 'doc',
        id: 'wallet-app/intro-to-lrw',
        extra: {
          sidebarLabel: 'Introduction',
        },
      },
      {
        type: 'doc',
        id: 'wallet-app/intro-to-lrw',
        extra: {
          sidebarLabel: 'Wallet Architecture',
          fragmentIdentifier: 'wallet-architecture',
        },
      },
      {
        type: 'doc',
        id: 'wallet-app/intro-to-lrw',
        extra: {
          sidebarLabel: 'Coin Sourcing',
          fragmentIdentifier: 'libra-coin-sourcing',
        },
      },
    ]),
    category('Getting Started', [
      {
        type: 'doc',
        id: 'wallet-app/develop-reference-wallet',
        extra: {
          sidebarLabel: 'Develop Reference Wallet',
          fragmentIdentifier: 'set-up-and-deploy',
        },
      },
      // {
      //   type: 'doc',
      //   id: 'wallet-app/develop-reference-wallet',
      //   extra: {
      //     sidebarLabel: 'Admin Dashboard',
      //     fragmentIdentifier: 'set-up-and-deploy',
      //   },
      // },
    ]),
    category('Modules', [
      {
        type: 'doc',
        id: 'wallet-app/develop-reference-wallet',
        extra: {
          sidebarLabel: 'Login & Authentication',
          fragmentIdentifier: 'login-and-authentication',
        },
      },
      {
        type: 'doc',
        id: 'wallet-app/develop-reference-wallet',
        extra: {
          sidebarLabel: 'Custody',
          fragmentIdentifier: 'custody-module',
        },
      },
      {
        type: 'doc',
        id: 'wallet-app/develop-reference-wallet',
        extra: {
          sidebarLabel: 'Storage',
          fragmentIdentifier: 'storage-module',
        },
      },
      {
        type: 'doc',
        id: 'wallet-app/develop-reference-wallet',
        extra: {
          sidebarLabel: 'Risk',
          fragmentIdentifier: 'risk-module',
        },
      },
      {
        type: 'doc',
        id: 'wallet-app/develop-reference-wallet',
        extra: {
          sidebarLabel: 'Compliance',
          fragmentIdentifier: 'compliance-module',
        },
      },
      // {
      //   type: 'doc',
      //   id: 'wallet-app/develop-reference-wallet',
      //   extra: {
      //     sidebarLabel: 'Admin',
      //     fragmentIdentifier: 'custody-module',
      //   },
      // },
      {
        type: 'doc',
        id: 'wallet-app/develop-reference-wallet',
        extra: {
          sidebarLabel: 'Liquidity',
          fragmentIdentifier: 'liquidity-inventory-setup',
        },
      },
    ]),
    category('Test', [
      {
        type: 'doc',
        id: 'wallet-app/public-demo-wallet',
        extra: {
          sidebarLabel: 'Public Wallet Demo',
        },
      },
      {
        type: 'doc',
        id: 'wallet-app/try-local-web-wallet',
        extra: {
          sidebarLabel: 'Local Web Wallet',
          fragmentIdentifier: 'set-up-and-deploy',
        },
      },
      {
        type: 'doc',
        id: 'wallet-app/try-local-mobile-wallet',
        extra: {
          sidebarLabel: 'Local Mobile Wallet',
          fragmentIdentifier: 'set-up-and-deploy',
        },
      },
    ]),
    category('Other', [
      {
        type: 'doc',
        id: 'wallet-app/develop-reference-wallet',
        extra: {
          sidebarLabel: 'Transaction Workflows',
          fragmentIdentifier: 'transaction-workflows',
        },
      },
      {
        type: 'doc',
        id: 'wallet-app/develop-reference-wallet',
        extra: {
          sidebarLabel: 'PubSub',
          fragmentIdentifier: 'pubsub',
        },
      },
      {
        type: 'doc',
        id: 'wallet-app/develop-reference-wallet',
        extra: {
          sidebarLabel: 'Service APIs',
          fragmentIdentifier: 'service-api',
        },
      },
      {
        type: 'doc',
        id: 'wallet-app/develop-reference-wallet',
        extra: {
          sidebarLabel: 'Localization',
          fragmentIdentifier: 'localization',
        },
      },
      {
        type: 'doc',
        id: 'wallet-app/develop-reference-wallet',
        extra: {
          sidebarLabel: 'Contribute',
          fragmentIdentifier: 'contribute',
        },
      },
    ]),
  ]),
  ...getReference(),
];

module.exports = Sidebar;

