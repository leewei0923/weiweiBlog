import React, { useState, useEffect} from "react";
import { useStaticQuery, graphql } from "gatsby";
import { BackTop } from "antd";
import { UpOutlined } from "@ant-design/icons";

import Header from "./Header";
import RightSide from "./RightSide";
import Footer from "./Footer";
import RightSideMobbile from "./RightSideMobbile";
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

  // 在移动端 , 控制 rightside 显示和关闭

  let [sideShow, setsideShow] = useState(false);
  let mounted = true;
  let sideShowBtn = () => {
    if(mounted) {
      setsideShow(!sideShow);
    }
    
    sideShow
      ? (document.documentElement.style.overflow = "scroll")
      : (document.documentElement.style.overflow = "hidden");
  };

  useEffect(()=>{
    return function cleanUp() {
      mounted = false;
    }
  },[])

  return (
    <div className="layoutContainer">
      <div>
        <Header
          blogname={data.site.siteMetadata.title}
          sideShow={sideShowBtn}
        />
      </div>

      <div className="layoutMain">
        <main className="layoutMainCenter">{children}</main>
        <div className="layoutMainRight">
          {/* PC端显示该组件 */}
          <RightSide
            articleCount={data.allMarkdownRemark.totalCount}
            tagsCount={data.allMarkdownRemark.distinct}
          />
        </div>

        {/* 移动端显示该组件 */}
        {sideShow ? <RightSideMobbile sideShow={sideShowBtn} /> : ""}
      </div>

      <div style={{ background: "#ececec", display: "flex" }}>
        <Footer />
      </div>

      <div className="extralContainer">
        {sideShow ? (
          ""
        ) : (
          <BackTop duration="600">
            <div className="backTop">
              <UpOutlined />
            </div>
          </BackTop>
        )}
      </div>
    </div>
  );
}
