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
    extra: {classNames: ['categoryIndex']},
    href: '/docs/merchant/overview',
    label: 'Overview',
    type: 'link',
  },
  {
    extra: {classNames: ['categoryIndex']},
    id: 'merchant/merchant-guide',
    type: 'doc',
  },
  {
    extra: {iconClasses: ['listTitle']},
    label: 'Libra Reference Merchant',
    type: 'category',
    items: [
      {
        extra: {iconClasses: ['listTitle']},
        label: 'Concepts',
        type: 'category',
        items: [
          'merchant/lrm-concepts'
        ]
      },
      {
        extra: {iconClasses: ['listTitle']},
        label: 'Tutorials',
        type: 'category',
        items: [
          'merchant/try-demo-merchant',
          'merchant/local-merchant-store',
          'merchant/payment-mgmt',
          'merchant/set-up-for-development'
        ]
      },
      {
        extra: {iconClasses: ['listTitle']},
        label: 'Develop',
        type: 'category',
        items: [
          'merchant/develop-lrm'
        ]
      },
    ]
  },
  getReference(),
];

module.exports = Sidebar;
