const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blogpost.js`),
      context: {
        slug: node.fields.slug,
      },
    });
  });

  const postsPerPage = 8;
  const numPages = Math.ceil(17 / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    console.log("页码",i);
    console.log("shenm",_)
    createPage({
      path: i === 0 ? `/page/` : `/page/${i+1}`,
      component: path.resolve(`./src/templates/Page.js`),
      context: {
        currentPage: i+1,
        totalPage: numPages,
        limit: postsPerPage,
        skip: i * postsPerPage,
      },
    });
  });
};
