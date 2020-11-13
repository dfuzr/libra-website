const {category, categoryBoilerplate, getReference, standaloneLink} = require('./components');

const Sidebar = [
  ...categoryBoilerplate('move/overview', 'move'),
  category('Basocs', [
    {
      href: '',
      label: 'Introduction to Move',
      type: 'link',
    },
    {
      href: 'https://hackmd.io/OQNXaPKnSLu9CZFf1pXMyw',
      label: 'Integers',
      type: 'link',
    },
    {
      href: 'https://hackmd.io/fy5lNWaBRQasaCG37YTuqA',
      label: 'Bool',
      type: 'link',
    },
    {
      href: 'https://hackmd.io/Gtb2XylPRHGpYnybBrwEJg',
      label: 'Address',
      type: 'link',
    },
    {
      href: 'https://hackmd.io/-ojrq67DSDeo05_Tzvle4Q',
      label: 'Vector',
      type: 'link',
    },
    {
      href: 'https://hackmd.io/INmbHY_mQ0mVdQ5ZH8unIA',
      label: 'Signer',
      type: 'link',
    },
    {
      href: 'https://hackmd.io/nPGDBEtZRWmxZa2TX-L4ew',
      label: 'References',
      type: 'link',
    },
    {
      href: 'https://hackmd.io/g3Yc2YmFSV2zzPub6tVTqg',
      label: 'Tuples',
      type: 'link',
    },
    {
      href: '',
      label: 'Move & Copy',
      type: 'link',
    },
    {
      href: '',
      label: 'Borrowing & References',
      type: 'link',
    },
    {
      href: '',
      label: 'Reference Safety',
      type: 'link',
    },
  ]),
  category('Primitive Types', [
    {
      href: 'https://hackmd.io/BmFJYYLPQpiAJPoOKP9iMQ',
      label: 'Local Variables and Scopes',
      type: 'link',
    },
    {
      href: 'https://hackmd.io/PTD95Sf9TrKyFY95fy2CAA',
      label: 'Abort & Return',
      type: 'link',
    },
    {
      href: 'https://hackmd.io/xNer9gtjRQqgku61dqhPEQ',
      label: 'Conditionals',
      type: 'link',
    },
    {
      href: 'https://hackmd.io/flJjRYKATxKOC8TN-xKKnw',
      label: 'Loops',
      type: 'link',
    },
    {
      href: 'https://hackmd.io/667GWMmlSfmQKKpPaGOM-w',
      label: 'Functions',
      type: 'link',
    },
    {
      href: 'https://hackmd.io/rwLPiE7WTNqkgoWxHEnpBg',
      label: 'Structs and Resources',
      type: 'link',
    },
    {
      href: 'https://hackmd.io/w_pk_vhZQyW3hc3_2JL_JA',
      label: 'Constants',
      type: 'link',
    },
    {
      href: 'https://hackmd.io/tchREnSeRviV9pdvIobS-Q',
      label: 'Generics',
      type: 'link',
    },
    {
      href: 'https://hackmd.io/LVdYHUbiQJiEPQrq858eSg',
      label: 'Modules and Scripts',
      type: 'link',
    },
    {
      href: 'https://hackmd.io/FUX9oI_RQDCqHlur9PzjSw',
      label: 'Uses & Aliases',
      type: 'link',
    },
  ]),
  category('Ownership', [
    {
      href: 'https://hackmd.io/sAjKEdbFSm2N9o17TjKKwQ',
      label: 'Structure',
      type: 'link',
    },
    {
      href: 'https://hackmd.io/5CrxHeHjRai7NFABv60NNQ',
      label: 'Move Storage & Execution Model',
      type: 'link',
    },
    {
      href: 'https://hackmd.io/4Q_sRai3RfK6hJkuWA1kMQ',
      label: 'Operators',
      type: 'link',
    },
  ]),
  category('Global Storage', [
    {
      href: '',
      label: 'Intro to Global Storage',
      type: 'link',
    },
    {
      href: 'https://hackmd.io/R_MGoH67Tw2p767-laTN1A',
      label: 'Toy Coin',
      type: 'link',
    },
    {
      href: '',
      label: 'CrowdBoost',
      type: 'link',
    },
    {
      href: '',
      label: 'Escrow',
      type: 'link',
    },
    {
      href: 'https://hackmd.io/nym4e5S3Sy2c0XklPHbjew',
      label: 'Role-Based Access Control',
      type: 'link',
    },
    {
      href: '',
      label: 'Encapsulating Data Behavior',
      type: 'link',
    },
    {
      href: '',
      label: 'Understanding Type-Indexed Storage',
      type: 'link',
    },
    {
      href: 'https://hackmd.io/MkGJsxg_QQ2yJkjpieGcUQ',
      label: 'Debugging Move in Libra Network',
      type: 'link',
    },
    {
      href: '',
      label: 'Capability Passing',
      type: 'link',
    },
  ]),
  category('Tutorials', [
    {
      href: 'https://hackmd.io/dCWzI8YlSgKYk9eAubkEMw',
      label: 'Standard Library',
      type: 'link',
    },
    {
      href: '',
      label: 'Move Tools',
      type: 'link',
    },
  ]),
  category('Reference', [
    {
      href: '',
      label: 'Keyword',
      type: 'link',
    },
  ]),
  ...getReference(),
];

module.exports = Sidebar;
