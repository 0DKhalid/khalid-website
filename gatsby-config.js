require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix:'/khalid-website',
  siteMetadata: {
    title: `ktech-website`,
    // siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-preact`,

    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Tajawal'],
        },
      },
    },
    {
      resolve:'gatsby-plugin-manifest',
      options:{
        icon:`src/images/icon.png`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-ytbplaylist',
      options: {
        apiKey: process.env.YOUTUBE_KEY,
        channelId: 'UCIBfmRr16yo6gWRTh9rExIQ',
        // maxResult: 50, // defualt 50.
      },
    },
  ],
};
