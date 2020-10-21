import React from "react";

function Search({ handleSearchChange }) {
  const searchStyle = {
    backgroundColor: "black",
    color: "white",
  }
  return (
    <div className="SEARCH">
        <input
          style={searchStyle}
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