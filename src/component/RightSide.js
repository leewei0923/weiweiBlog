import { Link } from "gatsby";
import React from "react";

export default function RightSide() {
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
              <Link to="/tags">20</Link>
            </div>
          </div>

          <div className="menuItem">
            <p>标签</p>
            <div className="menuItemCount">
              <Link to="/tags">100</Link>
            </div>
          </div>
        </div>

        <div className="motto">
          <p className="randomText">
            人生得意须尽欢，莫使金樽空对月。 天生我材必有用，千金散尽还复来。
          </p>
        </div>
      </div>
    </div>
  );
}
