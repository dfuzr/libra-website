const {categoryBoilerplate, getReference, standaloneLink} = require('./components');

const Sidebar = [
  ...categoryBoilerplate('node/overview', 'node-operators'),
  standaloneLink('node/nodes'),
  standaloneLink('node/config-deploy-fn'),
  standaloneLink('node/run-local-network'),
  ...getReference(),
];

module.exports = Sidebar;
