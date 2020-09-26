import React from "react";
import Search from "./Search/search";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse row" id="navbarNav">
        <div className="input-group col-4">
          <Search />
        </div>
      </div>
    </nav>
  );
}
export default Navigation;