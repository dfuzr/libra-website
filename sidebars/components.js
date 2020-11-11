const { isWebUri } = require('valid-url');
const path = require('path');

const getDarkModeImage = img => `img/${path.parse(img).name}-dark${path.parse(img).ext}`;

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
  const type = theme === 'primary' ? 'doc' : 'ref';
  const standaloneReferenceLink = id => ({
    extra: {
      classNames: ['standaloneReferenceLink'],
    },
    id,
    type
  });
  const referenceLink = (id, icon, iconDark) => ({
    type,
    id,
    extra: {
      classNames: ['iconIndented'],
      icon,
      iconDark: iconDark ? iconDark : getDarkModeImage(icon),
    }
  });

  return [
    {
      type: 'category',
      label: 'Tools',
      items: [
        referenceLink('sdks/overview', 'img/document.svg'),
        referenceLink('cli', 'img/cli.svg'),
        // referenceLink('core/contributing', 'img/github.svg'),
      ],
    },
    {
      type: 'category',
      label: 'Learning Center',
      items: [
        referenceLink('tutorials/overview', 'img/tutorials.svg'),
        referenceLink('wallet-app/public-demo-wallet', 'img/overlapping-circle-and-square-2.svg', 'img/overlapping-circle-and-square-dark.svg'),
        referenceLink('merchant/try-demo-merchant', 'img/bobby-pin-2.svg', 'img/bobby-pin-dark.svg'),
      ],
    },
    standaloneReferenceLink('reference/security'),
    standaloneReferenceLink('reference/glossary'),
    standaloneReferenceLink('reference/prospective-vasps'),
  ];
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
};

module.exports = {
  category,
  backToHome,
  categoryBoilerplate,
  getReference,
  standaloneLink,
};
