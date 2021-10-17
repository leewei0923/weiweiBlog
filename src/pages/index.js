import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../component/Layout";
import { createFromIconfontCN } from "@ant-design/icons";
import "./page.css";

export default function index({ data }) {
  const IconFont = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_2872071_zkbv9iemqw9.js",
  });
  return (
    <Layout>
      <div className="indexContainer">
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <div key={node.id} className="indexArticle">
              {/* 标题 */}
              <h2 className="indexArticleTitle">
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </h2>
              {/* 摘要 */}

              <div className="indexArticleSummary">
                <Link to={node.fields.slug}>
                  <span>{node.excerpt}</span>
                </Link>
              </div>

              {/* 标签 */}
              <div className="indexArticleTags">
                {/* 日期 */}
                <div className="indexArticleTag">
                  <IconFont type="icon-rili"></IconFont>
                  <p>{node.frontmatter.date}</p>
                </div>

                {/* tag */}
                <div className="indexArticleTag">
                  <IconFont type="icon-biaoqian"></IconFont>
                  <p>{node.frontmatter.tags}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { fields: frontmatter___title, order: DESC }) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt(truncate: true, pruneLength: 100)
          frontmatter {
            title
            tags
            date
          }
        }
      }
    }
  }
`;
