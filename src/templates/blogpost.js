import React from "react";
import Layout from "../component/Layout";
import { graphql } from "gatsby";


export default function BlogPost({data}) {
  const post = data.markdownRemark;
  console.log(data)

  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      
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
  }
`;
