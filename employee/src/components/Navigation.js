import React from "react";
import Search from "./Search/search";

function Navigation({handleSearchChange}) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="input-group col-4 offset-4">
        <Search handleSearchChange={handleSearchChange} />
      </div>
    </nav>
  );
}
export default Navigation;