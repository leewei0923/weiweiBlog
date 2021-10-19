import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../component/Layout";
import { createFromIconfontCN } from "@ant-design/icons";
import "../pages/page.css";

export default function Page({ data }) {
  const IconFont = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_2872071_zkbv9iemqw9.js",
  });

  const { pageCount, currentPage } = data.allMarkdownRemark.pageInfo;  // currentPage 当前页  pageCount 总页数

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

        <div>
          {console.log(data)}
          <div>
            {currentPage - 1 > 0 && (
              <Link
                to={"/page/" + (currentPage - 1 === 1 ? "" : currentPage - 1)}
                rel="prev"
              >
                ← 上一页
              </Link>
            )}
          </div>
          <div>
            {currentPage + 1 <= pageCount && (
              <Link to={"/page/" + (currentPage + 1)} rel="next">
                下一页 →
              </Link>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query myBlog($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___title, order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
      pageInfo {
        currentPage
        pageCount
      }
    }
  }
`;
