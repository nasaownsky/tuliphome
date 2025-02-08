if (process.env.NODE_ENV === "development" || "production") {
  require("dotenv").config()
}

module.exports = {
  siteMetadata: {
    title: `Наш Тюльпан`,
    description: `Тюльпаны оптом в Беларуси от производителя`,
    author: `@nasaownsky`,
    url: `https://www.nashtulpan.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Наш Тюльпан`,
        start_url: `/`,
        background_color: `#f6b861`,
        theme_color: `#f6b861`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.webp`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-image`,
  ],
}
