const {backToHome, getReference} = require('./components');

const Sidebar = [
  backToHome,
  {
    extra: {
      classNames: ['categoryLabel'],
      icon: 'img/node-operators.svg.svg',
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
    label: '',
    type: 'category',
    items: [
      'node/config-deploy-fn',
      'node/manage-monitor-fn',
    ]
   },
 getReference(),
];


module.exports = Sidebar;
