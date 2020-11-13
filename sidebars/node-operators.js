const {category, categoryBoilerplate, getReference, standaloneLink} = require('./components');

const Sidebar = [
  ...categoryBoilerplate('node/overview', 'node-operators'),
  category('Basics', [
    {
      type: 'doc',
      id: 'node/nodes',
      extra: {
        fragmentIdentifier: 'validator-nodes-validators',
        sidebarLabel: 'Validators',
      },
    },
    {
      type: 'doc',
      id: 'node/life-of-a-transaction',
      extra: {
        fragmentIdentifier: 'validator-component-interactors',
        sidebarLabel: 'Validator Components',
      },
    },
    {
      type: 'doc',
      id: 'node/nodes',
      extra: {
        fragmentIdentifier: 'full-nodes',
        sidebarLabel: 'Full Nodes',
      },
    }
  ]),
  category('Getting Started', [
    'node/config-deploy-fn',
  ]),
  ...getReference(),
];

module.exports = Sidebar;
