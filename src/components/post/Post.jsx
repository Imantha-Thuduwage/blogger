import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Text Free is a free text and call app that lets you chat
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
        <p className="postDesc">
          The United States is a federal republic with three separate branches
          of government, including a bicameral legislature. It is a liberal
          democracy and market economy; it ranks high in international measures
          of human rights, quality of life, income and wealth, economic
          competitiveness, and education; and it has low levels of perceived
          corruption. It has high levels of incarceration and inequality, allows
          capital punishment, and lacks universal health care. As a melting pot
          of cultures and ethnicities, the U.S. has been shaped by centuries of
          immigration.
        </p>
      </div>
    </div>
  );
}
