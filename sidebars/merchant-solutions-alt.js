const {backToHome, getReference} = require('./components');

const Sidebar = [
  backToHome,
  {
    extra: {
      classNames: ['categoryLabel'],
      icon: 'img/merchant-solutions.svg',
      iconDark: 'img/merchant-solutions-dark.svg',
      iconClasses: ['iconLeft'],
      noLink: true,
    },
    id: 'merchant/overview',
    type: 'doc',
  },
  {
    extra: {
      classNames: ['categoryIndex'],
    },
    href: '/docs/merchant/overview',
    label: 'Overview',
    type: 'link',
  },
  {
    label: '',
    type: 'category',
    items: [
      'merchant/merchant-guide',
    ]
  },
   {
    label: 'Libra Reference Merchant',
    type: 'category',
    items: [
      'merchant/lrm-concepts',
      'merchant/develop-lrm'
    ]
   },
 getReference(),
];


module.exports = Sidebar;
