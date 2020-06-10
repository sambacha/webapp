module.exports = {
  siteMetadata: {
    title: 'Freight Trust & Clearing Corporation',
    description: 'Blockchain powered EDI Service Bus for Logistics & Customs',
    keywords: 'edi,logistics,supply chain,customs,trade,freight',
  },
  pathPrefix: `/gtc`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Freight Trust Network',
        short_name: 'Freight Trust',
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
