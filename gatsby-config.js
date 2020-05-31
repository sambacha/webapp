module.exports = {
  siteMetadata: {
    title: 'Freight Trust & Clearing',
    description: 'Enterprise EDI Smart Contract Network for Supply Chains',
    keywords: 'blockchain,edi,smart contracts,trade',
  },
  pathPrefix: `/gtc`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Freight Trust & Clearing Network',
        short_name: 'Freight Trust Network',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0062ff',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        repository: {
          baseUrl:
            'https://github.com/carbon-design-system/gatsby-theme-carbon',
          subDirectory: '/packages/example',
        },
        iconPath: './src/images/favicon.png',
      },
    },
  ],
};
