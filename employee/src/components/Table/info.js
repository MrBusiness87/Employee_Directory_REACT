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
  
  useEffect(() => {
    API.allUsers().then(results => {
      setState({
        ...devState,
        users: results.data.results,
        filtered: results.data.results
      });
    });
  }, []);
  
  const canDrink = () => {
    let filterArray = [...devState.users].filter(user => user.dob.age > 21)
    setState({ ...devState, filtered: filterArray
    });
  };

  const reset = () => {
    setState({ filtered: devState.users });
    console.log ("devState.users",devState.users)
  };

  const handleSearchChange = event => {
    const filter = event.target.value.toLowerCase();
    const filterList = devState.users.filter(item => {
      let value = item.name.last + ", " + item.name.first;
      return value.toLowerCase().indexOf(filter) !== -1;
    });

    setState({ ...devState, filtered: filterList });
  };

  
  const buttonStyle = {
    marginRight: "auto",
    marginLeft: "auto",
  }

  const searchArea = {
    textAlign: "center",
  }

  return (
    <div style={searchArea}>
      <Navigation handleSearchChange={handleSearchChange} />
      <button onClick={canDrink} className="btn btn-success" style={buttonStyle}>OVER 21</button>&emsp;
      <button onClick={reset} className="btn btn-danger" style={buttonStyle}>RESET</button>
      <div className="area">
        {devState.filtered.length === devState.users.length ? <Table headings={devState.headings} users={devState.users} /> : <Table headings={devState.headings} users={devState.filtered} />}
      </div>
    </div>
  );
};

export default Info;