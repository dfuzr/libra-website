const {backToHome, getReference} = require('./components');

const Sidebar = [
  backToHome,
  {
    extra: {
      classNames: ['categoryLabel'],
      icon: 'img/move.svg',
      iconDark: 'img/move-dark.svg',
      iconClasses: ['iconLeft'],
      noLink: true,
    },
    id: 'move/overview',
    type: 'doc',
  },
  {
    extra: {classNames: ['categoryIndex']},
    href: '/docs/move/overview',
    label: 'Overview',
    type: 'link',
  },
  {
    extra: {iconClasses: ['listTitle']},
    label: 'Getting Started',
    type: 'category',
    items: [
      {
        href: '',
        label: 'Installation',
        type: 'link',
      },
      {
        href: '',
        label: 'Hello, Move',
        type: 'link',
      },
      {
        href: '',
        label: 'Transactions Scripts vs. Modules',
        type: 'link',
      },
    ]
  },
  {
    href: 'https://github.com/libra/move-documentation-workspace/blob/master/source-language/programming-your-first-move-module.md',
    label: 'Programming Your First Move Module',
    type: 'link',
  },
  {
    href: 'https://github.com/libra/move-documentation-workspace/blob/master/source-language/move-language-basics.md',
    label: 'Move Language Basics',
    type: 'link',
  },
  {
    href: 'https://github.com/libra/move-documentation-workspace/blob/master/source-language/resources.md',
    label: 'Resources',
    type: 'link',
  },
  {
    href: 'https://github.com/libra/move-documentation-workspace/blob/master/source-language/ownership.md',
    label: 'Ownership',
    type: 'link',
  },
  {
    href: '',
    label: 'Storage and Execution',
    type: 'link',
  },



  {
    extra: {iconClasses: ['listTitle']},
    label: 'Get Started',
    type: 'category',
    items: [
      'tutorials/my-first-transaction',
      'tutorials/my-first-client',
      'tutorials/query-the-blockchain',
      'tutorials/run-local-network',
    ]
  },
  getReference(),
];

module.exports = Sidebar;
