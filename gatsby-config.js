require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `ktech-website`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,

    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Tajawal"],
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-ytbplaylist",
      options: {
        apiKey: process.env.YOUTUBE_KEY,
        playListIds: [
          `PLy2vwCvAbFKScg8nZRzgCkxl3x8n9ABhD`,
          `PLy2vwCvAbFKSmjvT1NsUEu6N58kf8qGFt`,
        ],
        maxResult: 50, // defualt 50
      },
    },
  ],
};
