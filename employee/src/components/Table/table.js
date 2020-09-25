import React from "react";
import Cell from "./cell";

const Table = () => {
  const context = React.createContext({});

  return (
    <div className="datatable mt-5">
      <table id="table">
        <thead>
          <tr>
            {context.developerState.headings.map(({ name }) => {
              return (
                <th
                  className="col"
                  key={name}
                  onClick={() => {
                    context.handleSort(name);
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>
        <Cell />
      </table>
    </div>
  );
}

export default Table;