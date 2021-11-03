import React,{useState} from "react";
import Layout from "../component/Layout";
import { graphql } from "gatsby";
import { createFromIconfontCN } from "@ant-design/icons";

import "../styles/global.css";

import "../templates/templates.css";

// alicion 自定义图标
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2872071_iseb0u890up.js",
});

export default function BlogPost({ data }) {
  const post = data.markdownRemark;

  // 由 tableOfContents 获取目录

  const catalog = data.allMarkdownRemark.edges[0].node.tableOfContents;

  // 用于控制目录的显示和消失

  const [blogCatalogVar,setblogCatalogVar] = useState(false);

  let disapperBlogCatalog = () => {
        setblogCatalogVar(!blogCatalogVar);
  }
  return (
    <Layout>
      <div className="blogpostContainer">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        {console.log(data)}
      </div>

      <section className="blogCatalog">
        <div className="blogCatalogTop" onClick={()=> {return disapperBlogCatalog()}}>
          <IconFont type="icon-mulu" />
          <p>目录列表</p>
        </div>

        {blogCatalogVar ? (
          <div
            dangerouslySetInnerHTML={{ __html: catalog }}
            className="blogCatalogFooter"
          ></div>
        ) : (
          ""
        )}
        {console.log(blogCatalogVar)}
        {/* <div
          dangerouslySetInnerHTML={{ __html: catalog }}
          className="blogCatalogFooter"
        ></div> */}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      frontmatter {
        title
      }
    }

    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          tableOfContents
        }
      }
    }
  }
`;
