module.exports = {
  siteMetadata: {
    title: `ktech-website`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,

    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Tajawal'],
        },
      },
    },
  ],
};
