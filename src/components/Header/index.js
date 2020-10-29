import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <ul style={{ listStyleType: "none" }}>
        <li style={{ display: "inline", marginLeft: "10px" }}>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
