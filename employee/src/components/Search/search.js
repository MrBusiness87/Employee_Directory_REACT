import React from "react";

function Search({ handleSearchChange }) {
  return (
    <div className="SEARCH">
        <input
          className="form-control"
          type="search"
          placeholder="SEARCH"
          aria-label="SEARCH"
          onChange={element => handleSearchChange(element)}
        />
    </div>
  );
}
export default Search;