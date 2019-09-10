module.exports = {
  siteMetadata: {
    title: "Jacobo Martínez",
    author: "Jacobo Martínez",
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
