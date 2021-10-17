import { graphql } from "gatsby";
import React from "react";
import Layout from "../component/Layout";
import { Tag, Divider } from "antd";
import { Timeline } from "antd";

export const query = graphql`
  query tags {
    allMarkdownRemark {
      distinct(field: frontmatter___tags)
      group(field: frontmatter___tags) {
        totalCount
      }
      totalCount
      edges {
        node {
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;
export default function tags({ data }) {
  const colorList = ["#f50", "#2db7f5", "#87d068", "#108ee9"];
  const random = ~~(Math.random() * 4);
  const articlesList = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <div className="tagsContainer">
        {/* 标签集合 */}
        <div className="tagsTopTags">
          <div className="tagsTopTagsTitle">
            标签 - {data.allMarkdownRemark.totalCount}
          </div>

          <div className="tagbox">
            <Divider style={{ margin: "20px" }}>
              {data.allMarkdownRemark.distinct.map((node) => {
                return (
                  <Tag
                    style={{ margin: "5px", padding: "5px", color: "white" }}
                    color={colorList[random]}
                    key={node}
                  >
                    {node}
                  </Tag>
                );
              })}
            </Divider>
          </div>
        </div>

        {/* 文章集合 */}

        <div className="tagsArticles">
          <Timeline mode="alternate">
            {articlesList.map((data) => {
              return (
                <Timeline.Item
                  key={data.node.frontmatter.title + data.node.frontmatter.date}
                >
                  {data.node.frontmatter.title} {data.node.frontmatter.date}
                </Timeline.Item>
              );
            })}
          </Timeline>
        </div>
      </div>
    </Layout>
  );
}
