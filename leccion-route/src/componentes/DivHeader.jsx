import React from "react";
import { Link } from "react-router";

function DivHeader() {
  return (
    <>
      <div>No apto para manazas</div>
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

export default DivHeader;
