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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
  pathPrefix: "/shejs-site",
}
