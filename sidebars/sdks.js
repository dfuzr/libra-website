const {category, categoryBoilerplate, getReference} = require('./components');

const Sidebar = [
  ...categoryBoilerplate('sdks/overview', 'move', false),
  category('Languages', [
    {
      type: 'link',
      href: 'https://github.com/libra/libra-client-sdk-cplusplus',
      label: 'C++',
    },
    {
      type: 'link',
      href: 'https://github.com/libra/libra-client-sdk-csharp',
      label: 'C#',
    },
    {
      type: 'link',
      href: 'https://github.com/libra/libra-client-sdk-go',
      label: 'Go',
    },
    {
      type: 'link',
      href: 'https://github.com/libra/libra-client-sdk-java',
      label: 'Java',
    },
    {
      type: 'link',
      href: 'https://github.com/libra/libra-client-sdk-python',
      label: 'Python',
    },
    {
      type: 'link',
      href: 'https://github.com/libra/libra-client-sdk-typescript',
      label: 'TypeScript',
    },
  ]),
  ...getReference(),
];

module.exports = Sidebar;
