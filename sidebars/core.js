const {category, categoryBoilerplate, getReference} = require('./components');

const Sidebar = [
  ...categoryBoilerplate('core/overview', 'core-contributors'),
  category('Basics', [
    'core/libra-protocol',
    'core/nodes',
    'core/accounts',
    'core/gas',
    'core/events',
  ]),
  category('Transactions', [
    'core/transaction-types',
    'core/life-of-a-transaction',
    'core/my-first-transaction',
  ]),
  category('Keys', [
    'core/keys',
    // 'core/manage-keys',
  ]),
  category('Reference', [
    {
      type: 'link',
      href: 'https://github.com/libra/libra/blob/master/json-rpc/json-rpc-spec.md',
      label: 'JSON-RPC API',
    },
    {
      type: 'link',
      href: 'https://github.com/libra/libra-client-sdk-python',
      label: 'Python SDK',
    },
    {
      type: 'link',
      href: 'https://github.com/libra/libra-client-sdk-java',
      label: 'Java SDK',
    },
    {
      type: 'link',
      href: 'https://github.com/libra/libra-client-sdk-go',
      label: 'Go SDK',
    },
    'core/libra-cli',
  ]),
  category('Other', [
    'core/run-local-network',
    'core/query-the-blockchain',
    'core/clients',
  ]),
  ...getReference(),
];

module.exports = Sidebar;
