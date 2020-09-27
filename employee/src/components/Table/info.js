import React, { useState, useEffect } from "react";
import Table from "./table";
import Navigation from "../Navigation";
import API from "../../utils/API";

const Info = () => {
  const [devState, setState] = useState({
    users: [],
    order: "DESCEND",
    filtered: [],
    headings: [
      { name: "IMAGE" },
      { name: "NAME" },
      { name: "PHONE" },
      { name: "EMAIL" },
      { name: "BIRTHDAY" }
    ]
  });

  const sorting = heading => {
    let currOrder = devState.headings
      .filter(element => element.name === heading)
      .map(element => element.order)
      .toString();

    if (currOrder === "DESCEND") {
      currOrder = "ASCEND";
    } else {
      currOrder = "DESCEND";
    }

    const compare = (main, sub) => {
      if (currOrder === "ASCEND") {
        if (main[heading] === undefined) {
          return 1;
        } else if (sub[heading] === undefined) {
          return -1;
        }
        else if (heading === "name") {
          return main[heading].first.localeCompare(sub[heading].first);
        } else if (heading === "dob") {
          return main[heading].age - sub[heading].age;
        } else {
          return main[heading].localeCompare(sub[heading]);
        }
      } else {
        if (main[heading] === undefined) {
          return 1;
        } else if (sub[heading] === undefined) {
          return -1;
        }
        else if (heading === "name") {
          return sub[heading].first.localeCompare(main[heading].first);
        } else if (heading === "dob") {
          return sub[heading].age - main[heading].age;
        } else {
          return sub[heading].localeCompare(main[heading]);
        }
      }
    };
    const sortedUsers = devState.filtered.sorting(compare);
    const updatedHeadings = devState.headings.map(elem => {
      elem.order = elem.name === heading ? currOrder : elem.order;
      return elem;
    });

    setState({
      ...devState,
      filtered: sortedUsers,
      headings: updatedHeadings
    });
  };

  const Searching = event => {
    const filter = event.target.value;
    const filterList = devState.users.filter(item => {
      let values = item.name.last() + ", " + item.name.first();
      if (values.indexOf(filter()) !== -1) {
        return item;
      };
    });

    setState({ ...devState, filtered: filterList });
  };

  useEffect(() => {
    API.allUsers().then(results => {
      console.log(results.data.results);
      setState({
        ...devState,
        users: results.data.results,
        filtered: results.data.results
      });
    });
  }, []);

  return (
    <div
      value={{ devState, Searching, sorting }}
    >
      <Navigation />
      <div className="area">
        {devState.filtered.length > 0 ? <Table /> : <div></div>}
      </div>
    </div>
  );
};

export default Info;