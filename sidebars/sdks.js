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
    id: 'sdks/overview',
    type: 'doc',
  },
  {
    extra: {
      iconClasses: ['listTitle'],
    },
    label: 'Languages',
    type: 'category',
    items: [
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
    ]
  },
  getReference(),
];

module.exports = Sidebar;
