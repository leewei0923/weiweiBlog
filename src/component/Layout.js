import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./Header";
import RightSide from "./RightSide";

import "./all.css"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
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
          <RightSide />
        </div>
      </div>
    </div>
  );
}
