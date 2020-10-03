import React from "react";
import Search from "./Search/search";

function Navigation({handleSearchChange}) {
  const searchStyle = {
    marginRight: "auto",
    marginLeft: "auto",
  }
  return (
    <nav className="navbar navbar-expand-lg">
      <div style={searchStyle}>
        <Search handleSearchChange={handleSearchChange} filtered={handleSearchChange.filtered} />
      </div>
    </nav>
  );
}
export default Navigation;