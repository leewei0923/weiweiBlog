module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "伟伟小世界",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-remark-autolink-headers`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [`gatsby-remark-autolink-headers`, `gatsby-remark-prismjs`],
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/articles`,
      },
      __key: "pages",
    },
  ],
};
