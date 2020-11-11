const {backToHome, getReference} = require('./components');

const Sidebar = [
  backToHome,
  {
    extra: {
      classNames: ['categoryLabel'],
      icon: 'img/core-contributors.svg',
      iconDark: 'img/core-contributors-dark.svg',
      iconClasses: ['iconLeft'],
      noLink: true,
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
    label: '',
    type: 'category',
    items: [
      'core/libra-protocol',
      'core/life-of-a-transaction',
      'core/accounts',
      'core/transaction-types',
      'core/gas',
      'core/nodes',
      'core/clients',
      'core/events',
    ]
   },
 ...getReference(),
];


module.exports = Sidebar;
