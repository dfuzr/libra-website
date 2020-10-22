const {category, categoryBoilerplate, getReference} = require('./components');

const Sidebar = [
  ...categoryBoilerplate('core/overview', 'core-contributors'),
  category('Concepts', [
    'core/libra-protocol',
    'core/nodes',
    'core/life-of-a-transaction',
    'core/accounts',
    'core/transaction-types',
    'core/keys',
    'core/events',
    'core/gas',
    'core/clients',
  ]),
  category('Tutorials', [
    'core/my-first-transaction',
    'core/my-first-client',
    'core/query-the-blockchain',
    'core/run-local-network',
  ]),
  category('Develop', [
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
  ]),
  getReference(),
];

module.exports = Sidebar;
