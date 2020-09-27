import React from "react";
import Cell from "./cell";

function Table({ headings, users, handleSort }) {
  const appstyle = {
    color: "white",
    textAlign: "center",
    fontSize: "24px",
  }
  return (
    <div className="datatable mt-5">
      <table
        id="table"
        className="table table-striped table-hover table-condensed"
      >
        <thead>
          <tr>
            {headings.map(({ name }) => {
              return (
                <th
                  style={appstyle}
                  className="col-2"
                  key={name}
                  onClick={() => {
                    handleSort(name());
                  } }>
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>
        <Cell users={users} />
      </table>
    </div>
  );
}

export default Table;