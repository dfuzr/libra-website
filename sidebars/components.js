const { isWebUri } = require('valid-url');

const category = (label, items) => {
  return {
    extra: {iconClasses: ['listTitle']},
    label,
    type: 'category',
    items
  };
};

const backToHome = {
  extra: {
    classNames: ['backToHome'],
    icon: 'img/shared/arrow-left.svg',
    iconHover: 'img/shared/arrow-left-hover.svg',
    iconDarkHover: 'img/shared/arrow-left-dark-hover.svg',
  },
  href: '/docs/welcome-to-libra',
  label: 'Home',
  type: 'link',
};

const categoryBoilerplate = (id, image, includeOverview = true) => {
  const imageUrl = typeof image === 'string' ? image : image.url;
  const imageType = typeof image === 'string' ? 'svg' : image.type;

  return [
    backToHome,
    {
      extra: {
        classNames: ['categoryLabel'],
        icon: `img/${imageUrl}.${imageType}`,
        iconDark: `img/${imageUrl}-dark.${imageType}`,
        noLink: true,
      },
      id,
      type: 'doc',
    },
    {
      extra: standaloneLinkClasses(),
      href: `/docs/${id}`,
      label: 'Overview',
      type: 'link',
    },
  ];
};

const getReference = (theme = 'secondary') => {
  const classNames = ['reference'];
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
    },
    label: 'Reference',
    type: 'category',
    items: [
      {
        type,
        id: 'reference/glossary',
        extra: {
          classNames: ['iconIndented'],
          icon: 'img/terminology.svg',
          iconDark: 'img/terminology-dark.svg',
        },
      },
      {
        type,
        id: 'reference/prospective-vasps',
        extra: {
          classNames: ['iconIndented'],
          icon: 'img/compliance.svg',
          iconDark: 'img/compliance-dark.svg',
        }
      },
      {
        type,
        id: 'reference/security',
        extra: {
          classNames: ['iconIndented'],
          icon: 'img/security.svg',
          iconDark: 'img/security-dark.svg',
        }
      },
      {
        type,
        id: 'cli',
        extra: {
          classNames: ['iconIndented'],
          icon: 'img/core-contributors.svg',
          iconDark: 'img/core-contributors-dark.svg',
        }
      },
      {
        type,
        id: 'using-the-sidebar',
        extra: {
          classNames: ['iconIndented'],
          icon: 'img/compliance.svg',
          iconDark: 'img/compliance-dark.svg',
        }
      },
    ],
  };
};

const standaloneLink = (link, label) =>
  isWebUri(link) || link === ''
    ? {
        extra: standaloneLinkClasses(),
        href: link,
        label,
        type: 'link',
      }
    : {
        extra: standaloneLinkClasses(),
        id: link,
        type: 'doc',
      };

const standaloneLinkClasses = () => {
  return {
    classNames: ['categoryIndex']
  };
}

module.exports = {
  category,
  backToHome,
  categoryBoilerplate,
  getReference,
  standaloneLink,
};
