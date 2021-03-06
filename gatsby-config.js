const config = require("./config");

module.exports = {
  siteMetadata: {
    title: `Flax demo Gatsby version`,
    description: `Gatsby version of Flax demo`,
    author: `Dan Visel <dbvisel@gmail.com>`,
    siteUrl: `https://flaxkotahidemogatsby.netlify.app/`,
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "wpdemo",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "wpdemo",
        // Url to query from
        url: config.url,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Flax Demo`,
        short_name: `gatsbyflax`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
