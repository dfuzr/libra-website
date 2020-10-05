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
    extra: {classNames: ['categoryIndex']},
    href: '/docs/core/overview',
    label: 'Overview',
    type: 'link',
  },
  {
    extra: {iconClasses: ['listTitle']},
    label: 'Concepts',
    type: 'category',
    items: [
      'core/libra-protocol',
      'core/nodes',
      'core/life-of-a-transaction',
      'core/accounts',
      'core/transaction-types',
      'core/keys',
      'core/events',
      'core/gas',
      'core/clients',
    ]
  },
  {
    extra: {iconClasses: ['listTitle']},
    label: 'Tutorials',
    type: 'category',
    items: [
      'core/my-first-transaction',
      'core/my-first-client',
      'core/query-the-blockchain',
      'core/run-local-network',
    ]
  },
  {
    extra: {iconClasses: ['listTitle']},
    label: 'Develop',
    type: 'category',
    items: [
      {
        type: 'link',
        href: 'https://github.com/libra/libra/blob/master/json-rpc/json-rpc-spec.md',
        label: 'JSON-RPC Spec',
      },
      {
        type: 'link',
        href: 'https://github.com/libra/libra-client-sdk-go',
        label: 'Go SDK',
      },
      {
        type: 'link',
        href: 'https://github.com/libra/libra-client-sdk-java',
        label: 'Java SDK',
      },
      {
        type: 'link',
        href: 'https://github.com/libra/libra-client-sdk-python',
        label: 'Python SDK',
      },
      'core/libra-cli',
    ]
  },
  getReference(),
];

module.exports = Sidebar;
