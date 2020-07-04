const {backToHome} = require('./components');

const Sidebar = [
  backToHome,
  {
    extra: {
      classNames: ['categoryLabel', 'spacer-md'],
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
      classNames: ['categoryIndex', 'normalWeight'],
    },
    href: '/docs/merchant/overview',
    label: 'Overview',
    type: 'link',
  },
];

module.exports = Sidebar;
