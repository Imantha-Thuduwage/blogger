import React from "react";
import "./navBar.css";

export default function NavBar() {
  return (
    <div className="nav">
      <div className="topLeft">
        <ul className="navBarLink">
          <li className="navBarItem">Home</li>
          <li className="navBarItem">About</li>
          <li className="navBarItem">Write</li>
        </ul>
      </div>
      <div className="topCenter">
        <i class="fa-solid fa-user proImage"></i>
      </div>
    </div>
  );
}
