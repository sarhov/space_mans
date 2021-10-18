module.exports = {
  pathPrefix: '/space_mans',
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'space',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    "gatsby-plugin-breakpoints",
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
}
