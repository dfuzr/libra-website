const {category, categoryBoilerplate, getReference, standaloneLink} = require('./components');

const Sidebar = [
  ...categoryBoilerplate('move/overview', 'move'),
  category('Getting Started', [
    /*
     * The hrefs shouldn't just be '' but right now we don't
     * know where they would link to
     */
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
  ]),
  category('Get Started', [
    'tutorials/my-first-transaction',
    'tutorials/my-first-client',
    'tutorials/query-the-blockchain',
    'tutorials/run-local-network',
  ]),
  ...getReference(),
];

module.exports = Sidebar;
