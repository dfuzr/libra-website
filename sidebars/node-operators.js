const {backToHome, getReference} = require('./components');

const Sidebar = [
  backToHome,
  {
    extra: {
      classNames: ['categoryLabel'],
      icon: 'img/node-operators.svg',
      iconDark: 'img/node-operators-dark.svg',
      iconClasses: ['iconLeft'],
      noLink: true,
    },
    id: 'node/overview',
    type: 'doc',
  },
  {
    extra: {
      classNames: ['categoryIndex'],
    },
    href: '/docs/node/overview',
    label: 'Overview',
    type: 'link',
  },
  {
    extra: {classNames: ['categoryIndex']},
    type: 'doc',
    id: 'node/nodes',
  },
  {
    extra: {classNames: ['categoryIndex']},
    type: 'doc',
    id: 'node/config-deploy-fn',
  },
  {
    extra: {classNames: ['categoryIndex']},
    type: 'doc',
    id: 'node/run-local-network',
  },
  getReference(),
];

module.exports = Sidebar;
