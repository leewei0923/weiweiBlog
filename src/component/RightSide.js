import { graphql, Link ,useStaticQuery} from "gatsby";
import React from "react";
import { createFromIconfontCN } from '@ant-design/icons';

export default function RightSide(data) {

  const { articleCount, tagsCount } = data;
  const articleFive = useStaticQuery(
    graphql`
      query rightSide {
        allMarkdownRemark(
          limit: 5
          sort: { order: DESC, fields: frontmatter___date }
        ) {
          nodes {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    `
  );
// 最新的五篇文章
  const newArticleFive = articleFive.allMarkdownRemark.nodes;
  const IconFont = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_2872071_5hgrcn99wgm.js",
  });

  return (
    <div className="rightSideContainer">
      <div className="personCard">
        <div className="avator">
          <img src="https://qi.7miaoyu.com/weiweiblog-avator.jpg" alt="头像" />
        </div>

        <div className="nickName">
          <p>勇敢的小黄人</p>
        </div>

        <div className="menuItems">
          <div className="menuItem">
            <p>文章</p>
            <div className="menuItemCount">
              <Link to="/tags">{articleCount}</Link>
            </div>
          </div>

          <div className="menuItem">
            <p>标签</p>
            <div className="menuItemCount">
              <Link to="/tags">{tagsCount.length}</Link>
            </div>
          </div>
        </div>

        <div className="motto">
          <p className="randomText">
            人生得意须尽欢，莫使金樽空对月。 天生我材必有用，千金散尽还复来。
          </p>
        </div>
      </div>

      {/* 最新文章 */}

      <div className="newArticles">
        <div className="newArticlesTitle">
          <IconFont type="icon-zuixin"></IconFont>
          <h3>最新文章</h3>
        </div>

        {/* 文章标题 */}

        <section className="newArticlesFive">
        {newArticleFive.map((item)=>{
            return (
              <Link
                className="articleItem"
                to={item.fields.slug}
                key={item.fields.slug}
              >
                <span>{item.frontmatter.title}</span>
                <span>
                  {item.frontmatter.date.split("-")[1] +
                    "-" +
                    item.frontmatter.date.split("-")[2]}
                </span>
              </Link>
            );
        })}
        </section>
      </div>


      {/* 其他 */}
       

    </div>
  );
}
