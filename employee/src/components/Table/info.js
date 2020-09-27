import React, { useState, useEffect } from "react";
import Table from "./table";
import Navigation from "../Navigation";
import API from "../../utils/API";

const Info = () => {
  const [developerState, setDeveloperState] = useState({
    users: [],
    order: "descend",
    filteredUsers: [],
    headings: [
      { name: "IMAGE", order: "descend" },
      { name: "NAME", order: "descend" },
      { name: "PHONE", order: "descend" },
      { name: "EMAIL", order: "descend" },
      { name: "BIRTHDADY", order: "descend" }
    ]
  });

  handleSort = heading => {
    if (this.state.order === "descend") {
      this.setState({
        order: "ascend"
      })
    } else {
      this.setState({
        order: "descend"
      })
    }

    const compare = (main, sub) => {
      if (this.state.order === "ascend") {
        if (main[heading] === undefined) {
          return 1;
        } else if (sub[heading] === undefined) {
          return -1;
        }
        else if (heading === "NAME") {
          return main[heading].first.localeCompare(sub[heading].first);
        } else {
          return main[heading] - sub[heading];
        }
      } else {
        if (main[heading] === undefined) {
          return 1;
        } else if (sub[heading] === undefined) {
          return -1;
        }
        else if (heading === "NAME") {
          return sub[heading].first.localeCompare(main[heading].first);
        } else {
          return sub[heading] - main[heading];
        }
      }

    }
    const sortedUsers = this.state.filteredUsers.sort(compare);
    this.setState({ filteredUsers: sortedUsers });
  }

  handleSearchChange = event => {
    console.log(event.target.value);
    const filter = event.target.value;
    const filteredList = this.state.users.filter(item => {
      let values = Object.values(item)
        .join("")
        .toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ filteredUsers: filteredList });
  }

  componentDidMount() (
    API.allUsers().then(results => {
      this.setState({
        users: results.data.results,
        filteredUsers: results.data.results
      });
    })
  )

  render() (
  <Navigation handleSearchChange={this.handleSearchChange} />
        <div className="data-area">
          <Table
            headings={this.headings}
            users={this.state.filteredUsers}
            handleSort={this.handleSort}
          />
        </div>
      )