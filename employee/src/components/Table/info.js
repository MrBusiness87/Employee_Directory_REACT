import React, { useState, useEffect } from "react";
import Table from "table";
import API from "../../utils/API";

const Info = () => {
  const [state, setState] = useState({
    users: [],
    order: "DESCEND",
    filteredUsers: [],
    headings: [
      { name: "IMG" },
      { name: "NAME" },
      { name: "PHONE" },
      { name: "EMAIL" },
      { name: "BIRTHDAY" }
    ]
  });

  const handleSort = heading => {
    let currentOrder = state.headings
      .filter(element => element.name === heading)
      .map(element => element.order)
      .toString();

    if (currentOrder === "DESCEND") {
      currentOrder = "ASCEND";
    } else {
      currentOrder = "DESCEND";
    }

    const compareFnc = (a, b) => {
      if (currentOrder === "ASCEND") {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        else if (heading === "NAME") {
          return a[heading].first.localeCompare(b[heading].first);
        } else if (heading === "BIRTHDAY") {
          return a[heading].age - b[heading].age;
        } else {
          return a[heading].localeCompare(b[heading]);
        }
      } else {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        else if (heading === "NAME") {
          return b[heading].first.localeCompare(a[heading].first);
        }else if (heading === "BIRTHDAY") {
          return b[heading].age - a[heading].age;
        }  else {
          return b[heading].localeCompare(a[heading]);
        }
      }
    };
    const sortedUsers = state.filteredUsers.sort(compareFnc);
    const updatedHeadings = state.headings.map(element => {
      element.order = element.name === heading ? currentOrder : element.order;
      return element;
    });

    setState({
      ...state,
      filteredUsers: sortedUsers,
      headings: updatedHeadings
    });
  };

  const handleSearchChange = event => {
    const filter = event.target.value;
    const filteredList = state.users.filter(item => {
      let values = item.name.first.toLowerCase() + " " + item.name.last.toLowerCase();
      console.log(filter, values)
    if(values.indexOf(filter.toLowerCase()) !== -1){
      return item
    };
    });
    setState({ ...state, filteredUsers: filteredList });
  };

  useEffect(() => {
    API.getUsers().then(results => {
      console.log(results.data.results);
      setState({
        ...state,
        users: results.data.results,
        filteredUsers: results.data.results
      });
    });
  }, []);

  return (
    <React.createContext.Provider
      value={{ state, handleSearchChange, handleSort }}>
      <div className="data-area">
        {state.filteredUsers.length > 0 ? <Table /> : <div></div>}
      </div>
    </React.createContext.Provider>
  );
};

export default Info;