const {backToHome, getReference} = require('./components');

const Sidebar = [
   backToHome,
  {
    extra: {
      classNames: ['categoryLabel'],
      icon: 'img/core-contributors.svg',
      iconDark: 'img/core-contributors-dark.svg',
      noLink: false,
    },
    id: 'core/overview',
    type: 'doc',
  },
  {
    extra: {
      classNames: ['categoryIndex'],
    },
    href: '/docs/core/overview',
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
      'core/libra-protocol',
      'core/life-of-a-transaction',
      'core/the-libra-blockchain-paper',
      'core/state-machine-replication-paper',
      'core/accounts',
      'core/transaction-types',
      'core/gas',
      'core/nodes',
      'core/clients',
      'core/events',
    ]
  },  
  {
    extra: {
      iconClasses: ['listTitle'],
    },
    label: 'Tutorials',
    type: 'category',
    items: [
      'core/my-first-transaction',
      'core/my-first-client',
      'core/run-local-network',
    ]
  },
  {
    extra: {
      iconClasses: ['listTitle'],
    },
    label: 'Develop',
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
  getReference(),
];

module.exports = Sidebar;
