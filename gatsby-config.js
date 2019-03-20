module.exports = {
  siteMetadata: {
    title: `SHEJS`,
    description: `Une site pour le cours de SHEJS à Polytech.`,
    author: `BrokenSwing`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `timeline`,
        path: `${__dirname}/src/timeline`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
  ],
  pathPrefix: "/shejs-site",
}
