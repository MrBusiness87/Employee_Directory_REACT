import React from "react";

function Search({ handleSearchChange }) {
  return (
    <div className="SEARCH">
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder="SEARCH"
          aria-label="SEARCH"
          onChange={e => handleSearchChange(e)}
        />
      </form>
    </div>
  );
}
export default Search;