const backToHome = {
  extra: {
    classNames: ['backToHome', 'iconXS'],
    icon: 'img/shared/arrow-left.svg',
    iconHover: 'img/shared/arrow-left-hover.svg',
    iconDarkHover: 'img/shared/arrow-left-dark-hover.svg',
  },
  href: '/docs/welcome-to-libra-v2',
  label: 'Home',
  type: 'link',
};

const getReference = (theme = 'primary') => {
  const classNames = [];
  const type = theme === 'primary' ? 'doc' : 'ref';

  if (theme === 'secondary') {
    classNames.push({
      global: true,
      name: 'margin-top--md',
    });
  }

  return {
    extra: {
      classNames: classNames,
      containerClassNames: ['reference'],
    },
    label: 'Reference',
    type: 'category',
    items: [
      {
        type,
        id: 'v2-docs-guide',
        extra: {
          icon: 'img/roadmap.png',
          iconDark: 'img/reference-dark.svg',
        },
      },
      {
        type,
        id: 'reference/glossary',
        extra: {
          icon: 'img/terminology.svg',
          iconDark: 'img/terminology-dark.svg',
        },
      },
      {
        type,
        id: 'reference/roadmap',
        extra: {
          icon: 'img/roadmap.png',
          iconDark: 'img/reference-dark.svg',
        },
      },
      {
        type,
        id: 'reference/compliance',
        extra: {
          icon: 'img/compliance.svg',
          iconDark: 'img/compliance-dark.svg',
        }
      },
      {
        type,
        id: 'reference/security',
        extra: {
          icon: 'img/security.svg',
          iconDark: 'img/security-dark.svg',
        }
      }
    ],
  };
};

module.exports = {
  backToHome,
  getReference,
};
