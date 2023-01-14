import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitle">
        <span className="subTiltle">React & Node</span>
        <span className="headerDescription">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=925&format=pjpg&exif=1&iptc=1"
        alt="logo"
      />
    </div>
  );
}
