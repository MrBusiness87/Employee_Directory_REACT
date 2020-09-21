import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li>
        <h3>EMPLOYEE DIRECTORY</h3>
      </li>
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          MAIN
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/discover"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          DISCOVER
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/search"
          className={location.pathname === "/blog" ? "nav-link active" : "nav-link"}
        >
          SEARCH
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
