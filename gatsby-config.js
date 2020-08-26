/**
 *   SPDX-License-Identifier: Apache-2.0
 *   SPDXVersion: SPDX-2.2
 *   SPDX-FileCopyrightText: Copyright 2020 FreightTrust and Clearing Corporation
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

module.exports = {
  siteMetadata: {
    title: "Freight Trust & Clearing Corporation",
    description:
      "Blockchain Powered EDI for Supply Chain, Trade Finance & Logistics",
    keywords: "edi,logistics,supply chain,customs,trade,freight",
    siteUrl: "https://www.freighttrust.com",
  },
  pathPrefix: "/gtc",
  plugins: [
    "gatsby-plugin-eslint",
    //     {
    //      resolve: 'gatsby-plugin-mailchimp',
    //       options: {
    //           endpoint: '', // string; add your MC list endpoint here; see instructions below
    //           timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
    //       },
    //        },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Freight Trust Network",
        short_name: "Freight Trust",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#0062ff",
        display: "browser",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-153576120-2",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        //  variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "freighttrust.com",
      },
    },
    {
      resolve: "gatsby-theme-carbon",
      options: {
        repository: {
          baseUrl:
            "https://github.com/carbon-design-system/gatsby-theme-carbon",
          // TODO: fix gatsby theme to not use example...
          subDirectory: "/packages/example",
        },
        iconPath: "./src/images/favicon.png",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.freighttrust.com",
        sitemap: "https://www.freighttrust.com/sitemap.xml",
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-T7S3HWV",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        // TODO: Fix Optional Settings
        //  gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        //   gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        //  dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "standalone",
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        sitemapSize: 5000,
      },
    },
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn:
          "https://da062102387d49a398de9497332e059c@o418752.ingest.sentry.io/5324296",
        // TODO: Enable React SDK , see gitlab.com/fr8/ft-gatsby#issues
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() =>
          ["production", "stage"].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-autolink-headers",
          "gatsby-remark-check-links",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-next-seo",
      options: {
        openGraph: {
          type: "website",
          locale: "en_IE",
          url: "https://www.freighttrust.com",
          site_name: "EDI Blockchain VAN Network for Supply Chain & Logistics",
        },
        twitter: {
          handle: "@freighttrustnet",
          site: "@freighttrust.com",
          cardType: "app",
        },
      },
    },
    {
      resolve: "gatsby-plugin-iubenda-cookie-footer",
      options: {
        iubendaOptions: {
          countryDetection: true,
          consentOnContinuedBrowsing: false,
          ccpaAcknowledgeOnDisplay: true,
          whitelabel: false,
          lang: "en",
          siteId: 1967509,
          preferenceCookie: { expireAfter: 365 },
          enableCcpa: true,
          cookiePolicyId: 55466554,
          banner: {
            acceptButtonDisplay: true,
            customizeButtonDisplay: true,
            rejectButtonDisplay: true,
            position: "bottom",
            rejectButtonCaption: "Decline",
          },
        },
        googleTagManagerOptions: true,
      },
    },
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
  ],
};
