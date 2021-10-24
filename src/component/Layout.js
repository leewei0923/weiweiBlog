import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { BackTop } from "antd";
import { UpOutlined } from "@ant-design/icons";

import Header from "./Header";
import RightSide from "./RightSide";
import Footer from "./Footer";

import "./all.css";

export default function Layout({ children }) {
  // graphql 查询
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark {
          totalCount
          distinct(field: frontmatter___tags)
        }
      }
    `
  );


  return (
    <div className="layoutContainer">
      <div>
        <Header blogname={data.site.siteMetadata.title} />
      </div>

      <div className="layoutMain">
        <main className="layoutMainCenter">{children}</main>
        <div className="layoutMainRight">
          <RightSide
            articleCount={data.allMarkdownRemark.totalCount}
            tagsCount={data.allMarkdownRemark.distinct}
          />
        </div>
      </div>

      <div style={{ background: "#ececec", display: "flex" }}>
        <Footer />
      </div>

      <div className="extralContainer">
      
        <BackTop duration="600">
        <div className="backTop">
          <UpOutlined />
        </div>
        </BackTop>
      </div>
    </div>
  );
}
