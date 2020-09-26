import React from "react";
import Cell from "./cell";

function Table({ headings, users, handleSort }) {
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
                  className="col"
                  key={name}
                  onClick={() => {
                    handleSort(name.toLowerCase());
                  }}>
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