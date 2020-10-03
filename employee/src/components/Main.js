import React, {Component} from "react";
import Info from "./Table/info";

export default class Main extends Component {
  render () {
    const appstyle = {
      textAlign: "center",
      fontSize: "36px",
      fontWeight: "bold",
    }
    return (
      <div>
        <br />
        <h1 style={appstyle}>EMPLOYEE DIRECTORY</h1>
        <Info />
      </div>
    )
  }
}