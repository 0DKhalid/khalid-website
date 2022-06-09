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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    'gatsby-plugin-mdx',
  ],
};
