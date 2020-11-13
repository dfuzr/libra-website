const {category, categoryBoilerplate, getReference, standaloneLink} = require('./components');

const Sidebar = [
  ...categoryBoilerplate('merchant/overview', 'merchant-solutions'),
  category('Guides', [
    {
      type: 'doc',
      id: 'merchant/merchant-guide',
      extra: {
        sidebarLabel: 'Integrate Your Merchant Store with the LPN',
      },
    },
  ]),
  category('Libra Reference Merchant', [
    // category('Basics', [
    //   {
    //     type: 'doc',
    //     id: 'merchant/intro-to-lrm',
    //     extra: {
    //       sidebarLabel: 'Introduction',
    //     },
    //   },
    //   {
    //     type: 'doc',
    //     id: 'merchant/intro-to-lrm',
    //     extra: {
    //       fragmentIdentifier: 'architecture',
    //       sidebarLabel: 'Architecture',
    //     },
    //   },
    // ]),
    // category('Getting Started', [
    //   {
    //     type: 'doc',
    //     id: 'merchant/develop-lrm',
    //     extra: {
    //       fragmentIdentifier: 'set-up-and-deploy',
    //       sidebarLabel: 'Reference Merchant Store Setup',
    //     },
    //   },
    // ]),
    // category('Modules', [
    //   {
    //     type: 'doc',
    //     id: 'merchant/develop-lrm',
    //     extra: {
    //       fragmentIdentifier: 'merchant-front-end-module',
    //       sidebarLabel: 'Front-end',
    //     },
    //   },
    //   {
    //     type: 'doc',
    //     id: 'merchant/develop-lrm',
    //     extra: {
    //       fragmentIdentifier: 'merchant-back-end-module',
    //       sidebarLabel: 'Back-end',
    //     },
    //   },
    //   {
    //     type: 'doc',
    //     id: 'merchant/develop-lrm',
    //     extra: {
    //       fragmentIdentifier: 'vasp-module',
    //       sidebarLabel: 'VASP',
    //     },
    //   },
    // ]),
    category('Test', [
      {
        type: 'doc',
        id: 'merchant/try-demo-merchant',
        extra: {
          sidebarLabel: 'Public Demo',
        },
      },
      {
        type: 'doc',
        id: 'merchant/local-merchant-store',
        extra: {
          sidebarLabel: 'Merchant Store',
        },
      },
      {
        type: 'doc',
        id: 'merchant/payment-mgmt',
        extra: {
          sidebarLabel: 'Payment Management',
        },
      },
    ]),
    // category('Other', [
    //   {
    //     type: 'doc',
    //     id: 'merchant/develop-lrm',
    //     extra: {
    //       fragmentIdentifier: 'localization',
    //       sidebarLabel: 'Localization',
    //     },
    //   },
    //   {
    //     type: 'doc',
    //     id: 'merchant/develop-lrm',
    //     extra: {
    //       fragmentIdentifier: 'contribute',
    //       sidebarLabel: 'Contribute',
    //     },
    //   },
    // ]),
  ]),


  ...getReference(),
];

module.exports = Sidebar;
