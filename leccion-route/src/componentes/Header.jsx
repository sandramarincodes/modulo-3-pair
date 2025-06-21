import React from "react";
import { Link } from "react-router";

function Header() {
  return (
    <>
      
      <nav>
        <ul>
          <li>
            <Link to="/"> Overview</Link>{" "}
          </li>
          <li>
            <Link to="/repositories">Repositories</Link>
          </li>
          <li>
            <Link to="/packages">Packages</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
